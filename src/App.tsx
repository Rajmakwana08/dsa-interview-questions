import { useState } from 'react'
import './App.css'

interface Question {
  id: number;
  question: string;
  answer: string;
  codeExample?: string;
}

function App() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "1. What is a Stack?",
      answer: "A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can be added or removed only from the top of the stack. \\n\\tLast element inserted → first to be removed. \\n\\tThink of a stack of books or plates.",
      codeExample: `

📌 Real-life Applications of Stack

1. Undo/Redo in Text Editors

  When you type something, it is pushed into a stack.
  When you press Undo, the last operation is popped.

2. Browser Back Button

  Each visited webpage is pushed into a stack.
  When you click Back, the last page (on top of the stack) is popped and shown.

--------------------------------------------------------------------------------------

Basic Operations in Stack

  PUSH(x): Insert an element x into the stack (at the top).
  POP(): Remove the top element from the stack.
  PEEK()/TOP(): View the top element without removing it.
  isEmpty(): Check if the stack is empty.
  isFull(): Check if the stack is full (when using arrays).



Example Walkthrough
Suppose we start with an empty stack (using array):

Stack: []

PUSH(10) → [10]
PUSH(20) → [10, 20]
PUSH(30) → [10, 20, 30]
POP() → removes 30 → [10, 20]
PEEK() → shows 20

-------------------------------------------------------------------------------------

1. PUSH Operation

Algorithm PUSH(stack, x):
1. if top == N-1:
       print "Stack Overflow"
       return
2. top = top + 1
3. stack[top] = x

-------------------------------------------------------------------------------------

2. POP Operation

Algorithm POP(stack):
1. if top == -1:
       print "Stack Underflow"
       return
2. item = stack[top]
3. top = top - 1
4. return item

-------------------------------------------------------------------------------------

3. PEEK Operation

Algorithm PEEK(stack):
1. if top == -1:
       print "Stack is Empty"
       return
2. return stack[top]

-------------------------------------------------------------------------------------

C Example Code (Using Array)

#include <stdio.h>
#define SIZE 5

int stack[SIZE], top = -1;

// Function to push element
void push(int x) {
    if (top == SIZE - 1) {
        printf("Stack Overflow\\n");
    } else {                                                    top++;
        stack[++top] = x;   this is same like this ->           stack[top] = item;              
        printf("%d pushed to stack\\n", x);
    }
}

// Function to pop element
void pop() {
    if (top == -1) {
        printf("Stack Underflow\\n");
    } else {
        printf("%d popped from stack\\n", stack[top--]);
    }
}

// Function to see top element
void peek() {
    if (top == -1) {
        printf("Stack is Empty\\n");
    } else {
        printf("Top element is %d\\n", stack[top]);
    }
}

// Function to display all elements in stack
void display() {
    if (top == -1) {
        printf("Stack is Empty\\n");
    } else {
        printf("Stack elements are:\\n");
        for (int i = top; i >= 0; i--) {
            printf("%d\\n", stack[i]);
        }
    }
}

int main() {
    push(10);
    push(20);
    push(30);
    display();    // Display all elements
    peek();       // Shows 30
    pop();        // Removes 30
    display();    // Display after pop
    peek();       // Shows 20
    return 0;
}

-------------------------------------------------------------------------------------

hello this stack[SIZE] is like a array how to know it is stack.....?
stack[SIZE] is just an array.

do you mean actually this is array, humen or developer used like stack to know stack ?

Yes ✅ you got it exactly right!

In C (or most languages), when you write
  int stack[SIZE];

  this is actually an array.

-> There is no special keyword stack in C.
  The compiler only knows: “This is an integer array of fixed size.”

-> But when a developer (human) decides to use that array only with stack rules (push, pop, peek, LIFO) → then we call it a stack.


So the truth:

Machine/Compiler view → It’s always just an array (a block of memory).
Human/Developer view → If we use it with stack rules → we conceptually say it’s a stack data structure.
`
    },
    {
      id: 2,
      question: "2. Infix to Postfix using Stack.",
      answer: "Infix Expression → Operator between operands. \\n\\tExample: A + B , (A + B) * C \\n\\nPostfix Expression (Reverse Polish Notation, RPN) → Operator comes after operands. \\n\\tExample: A B + , A B + C *",
      codeExample: `
🔹 Example

Convert this infix:
      (A + B) * C

To postfix:
      A B + C *

-------------------------------------------------------------------------------------

🔹 Rules for Conversion (Using Stack)

We use a stack to hold operators.
Operands (A, B, C…) are directly added to output.

1. If symbol is Operand (A, B, C, 1, 2, …):
  → Add it to the output (postfix expression).

2. If symbol is ‘(’ :
  → Push it onto stack.

3. If symbol is ‘)’ :
  → Pop operators from stack until ‘(’ is found.

4. *If symbol is Operator (+, -, , /, ^):
  While the stack is not empty and the top of stack has an operator with higher or equal precedence, pop it to output.
  Then push the new operator onto the stack.

5. At the end:  
  Pop all remaining operators from the stack to output.

-------------------------------------------------------------------------------------

🔹 Operator Precedence

Highest: ^ (exponent)
Then: * /
Lowest: + -

-------------------------------------------------------------------------------------

🔹 Step-by-Step Example

(A + B) * C - D

📌 Steps:

Read ( → push → stack = (
Read A → output = A
Read + → push → stack = ( +
Read B → output = A B
Read ) → pop until ( → output = A B +
Read * → push → stack = *
Read C → output = A B + C
Read - → pop * (higher precedence) → output = A B + C * , then push -
Read D → output = A B + C * D
End → pop remaining - → output = A B + C * D - ✅

👉 Final Postfix =
      A B + C * D -

-------------------------------------------------------------------------------------
🧠 Explanation

Postfix (Reverse Polish Notation) → Operators come after operands.
Example: (A+B)*C-D → AB+C*D-

Prefix (Polish Notation) → Operators come before operands.
Example: (A+B)*C-D → -*+ABCD



🔹 C Example Code


#include <stdio.h>
#include <string.h>
#include <ctype.h>   // for isalnum

#define SIZE 100
char stack[SIZE];
int top = -1;

void push(char c) {
    stack[++top] = c;
}

char pop() {
    return stack[top--];
}

int precedence(char c) {
    if (c == '^') return 3;
    if (c == '*' || c == '/') return 2;
    if (c == '+' || c == '-') return 1;
    return -1;
}

// Function to convert infix to postfix
void infixToPostfix(char* exp) {
    char result[SIZE];
    int k = 0;
    top = -1;

    for (int i = 0; exp[i]; i++) {
        char c = exp[i];

        if (isalnum(c)) {
            result[k++] = c;
        }
        else if (c == '(') {
            push(c);
        }
        else if (c == ')') {
            while (top != -1 && stack[top] != '(')
                result[k++] = pop();
            pop(); // remove '('
        }
        else {
            while (top != -1 && precedence(stack[top]) >= precedence(c))
                result[k++] = pop();
            push(c);
        }
    }

    while (top != -1)
        result[k++] = pop();

    result[k] = '\\0';                  '\\0' -> Marks the end of a C string
    printf("Postfix: %s\\n", result);
}

// Helper function to reverse a string
void reverse(char* str) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {             In C, when you divide two integers, the fractional part is discarded (not rounded).
        char temp = str[i];                         So, for example, 5 / 2 = 2 (not 2.5).
        str[i] = str[len - i - 1];
        str[len - i - 1] = temp;
    }
}

// Function to convert infix to prefix
void infixToPrefix(char* exp) {
    char result[SIZE];
    int k = 0;
    top = -1;

    // Step 1: Reverse the infix expression
    reverse(exp);

    // Step 2: Swap '(' and ')'
    for (int i = 0; exp[i]; i++) {
        if (exp[i] == '(') exp[i] = ')';
        else if (exp[i] == ')') exp[i] = '(';
    }

    // Step 3: Convert to postfix (of reversed)
    for (int i = 0; exp[i]; i++) {
        char c = exp[i];

        if (isalnum(c)) {
            result[k++] = c;
        }
        else if (c == '(') {
            push(c);
        }
        else if (c == ')') {
            while (top != -1 && stack[top] != '(')
                result[k++] = pop();
            pop(); // remove '('
        }
        else {
            while (top != -1 && precedence(stack[top]) > precedence(c))
                result[k++] = pop();
            push(c);
        }
    }

    while (top != -1)
        result[k++] = pop();

    result[k] = '\\0';                   '\\0' -> Marks the end of a C string

    // Step 4: Reverse the result to get prefix
    reverse(result);
    printf("Prefix: %s\\n", result);
}

int main() {
    char exp[] = "(A+B)*C-D";
    printf("Infix: %s\\n", exp);
    infixToPostfix(exp);

    // Make a copy because infixToPrefix modifies it
    char exp2[] = "(A+B)*C-D";
    infixToPrefix(exp2);

    return 0;
}



👉 Output:
  Infix: (A+B)*C-D
  Postfix: AB+C*D-
  Prefix: - * + A B C D


🔑 Key Rule:

  When you push + after -, the algorithm first pops - because precedence(-) >= precedence(+).
  So, yes — the previous - will be popped before pushing +.
  if you have high priority operator in stack it will be pop first before pushing low priority operator.
  if you have low priority operator in stack it will be push first before pushing high priority operator.
  
-------------------------------------------------------------------------------------

What is isalnum()?
  isalnum() is a C library function (in <ctype.h>).
  It checks if a character is alphanumeric (either a letter or a digit).

👉 Alphanumeric = A–Z, a–z, 0–9

🔹 Syntax

  int isalnum(int ch);


ch → the character to check.

Returns:
  Non-zero (true) if character is letter or digit.
  0 (false) if not.

🔹 Example

#include <stdio.h>
#include <ctype.h>

int main() {
    char c1 = 'A';
    char c2 = '7';
    char c3 = '+';

    printf("%c -> %d\\n", c1, isalnum(c1));  // 'A' is alphanumeric → nonzero
    printf("%c -> %d\\n", c2, isalnum(c2));  // '7' is alphanumeric → nonzero
    printf("%c -> %d\\n", c3, isalnum(c3));  // '+' is NOT alphanumeric → 0

    return 0;
}

👉 Output:

A -> 1
7 -> 1
+ -> 0

-------------------------------------------------------------------------------------

++top → Pre-increment
  First increase top
  Then use the new value.

top++ → Post-increment
  First use the current value of top
  Then increase it.



🔹 Example

int top = -1;

  // Case 1: ++top
  printf("%d\\n", ++top);   // increases top to 0, then prints 0

  // Case 2: top++
  printf("%d\\n", top++);   // prints 0 first, then increases top to 1

👉 Output:
0
0

But after execution, top becomes 1.

✅ Final Summary:

++top → increase first, then use (good for stack push).
top++ → use first, then increase.


`
    },
    {
      id: 3,
      question: "3. What is a Queue?",
      answer: "A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear (end) and removed from the front (beginning). \\n\\tFirst element inserted → first to be removed. \\n\\tThink of a line of people waiting. \\n\\tThe first person in line is the first to get the ticket and leave.",
      codeExample: `
🔹 Basic Operations in Queue

Enqueue(x): Insert element x at the rear (end) of the queue.
Dequeue(): Remove element from the front of the queue.
Front(): Get the first element without removing it.
Rear(): Get the last element.
isEmpty(): Check if queue has no elements.
isFull(): Check if queue is full (for array implementation).


🔹 Queue Structure

Imagine a queue of size 5:

Index:  0   1   2   3   4
Queue: [ ] [ ] [ ] [ ] [ ]
front = -1, rear = -1   (empty)


Example Operations:

Enqueue(10) → [10] (front=0, rear=0)
Enqueue(20) → [10, 20] (front=0, rear=1)
Enqueue(30) → [10, 20, 30] (front=0, rear=2)
Dequeue() → removes 10 → [20, 30] (front=1, rear=2)

-------------------------------------------------------------------------------------

🔹 Queue Algorithms

Algorithm ENQUEUE(queue, x):

1. if rear == SIZE-1:
       print "Queue Overflow"
       return
2. if front == -1:
       front = 0
3. rear = rear + 1
4. queue[rear] = x


2. Dequeue

Algorithm DEQUEUE(queue):
1. if front == -1 or front > rear:
       print "Queue Underflow"
       return
2. item = queue[front]
3. front = front + 1
4. return item


-------------------------------------------------------------------------------------

🔹 C Example (Array Implementation)

#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int x) {
    if (rear == SIZE - 1) {
        printf("Queue Overflow\\n");
    } else {
        if (front == -1) front = 0; // first element
        queue[++rear] = x;
        printf("%d enqueued to queue\\n", x);
    }
}

{this queue is used only one time, after that it is full or empty.}

void dequeue() {
    if (front == -1 || front > rear) {          you must be used this condition front > rear because after some dequeue operation front will be greater than rear
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued from queue\\n", queue[front++]);
    }
}


{used this code for used queue again and again}

void dequeue() {
    if (front == -1 || front > rear) {            you can used front == rear condition so you don't need write this condition (front > rear)
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued from queue\\n", queue[front]);
        if (front == rear) {
            // Last element removed → reset queue
            front = rear = -1;
        } else {
            front++;
        }
    }
}


void display() {
    if (front == -1 || front > rear) {
        printf("Queue is Empty\\n");
    } else {
        printf("Queue: ");
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
        printf("\\n");
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    display();      // Queue: 10 20 30
    dequeue();      // removes 10
    display();      // Queue: 20 30
    return 0;
}



--------------------------------------------------------------------------------------

🔹 Real-Life Applications of Queue

Printer queue (first document sent is printed first).
CPU task scheduling.
Call center system (first caller is served first).
Data buffering (like YouTube video buffering).

✅ In short:

Stack → LIFO (Last In First Out) → like a plate stack.
Queue → FIFO (First In First Out) → like a ticket line.

      `
    },
    {
      id: 4,
      question: "4. Explain types of Queue.",
      answer: "",
      codeExample: `
🔹 Types of Queues
1. Simple Queue (Linear Queue) -- It is same as basic queue explained above.
2. Circular Queue
3. Double-Ended Queue (Deque)
4. Priority Queue

-------------------------------------------------------------------------------------

2. Circular Queue

🔹 Problem with Normal Queue

In a linear queue (array implementation), when we do many enqueue and dequeue, we may waste memory.

Example (Queue of size 5):

Enqueue: 10, 20, 30, 40, 50
Queue: [10, 20, 30, 40, 50]  (front=0, rear=4)

Now dequeue() removes 10 →

Queue: [_, 20, 30, 40, 50]  (front=1, rear=4)

👉 If we try to enqueue again, it says Queue Overflow,
even though there is empty space at the beginning (index 0).

---------------------------------------------------------------------------------------

🔹 Solution → Circular Queue

In a circular queue, we connect the last position back to the first position (like a circle).

👉 So after rear = SIZE-1, if there is space in the front (because of dequeues), we can reuse it.


🔹 Circular Queue Example (Size = 5)

Enqueue(10) → [10, _, _, _, _] (front=0, rear=0)
Enqueue(20) → [10, 20, _, _, _] (rear=1)
Enqueue(30) → [10, 20, 30, _, _] (rear=2)
Dequeue() → remove 10 → [_, 20, 30, _, _] (front=1)
Enqueue(40), Enqueue(50) → [_, 20, 30, 40, 50] (rear=4)
Enqueue(60) → instead of overflow, it goes to index 0 → [60, 20, 30, 40, 50] (rear=0).
👉 This is why it’s called circular.

🔹 Conditions in Circular Queue

Queue is Empty:
      front == -1

Queue is Full:
      (front == 0 && rear == SIZE-1) OR (rear + 1 == front)

-------------------------------------------------------------------------------------

🔹 Algorithms
Enqueue

Algorithm CIRCULAR_ENQUEUE(x):
1. if (front == 0 && rear == SIZE-1) OR (rear+1 == front):
       print "Queue Overflow"
2. else if (front == -1):
       front = rear = 0
       queue[rear] = x
3. else if (rear == SIZE-1 && front != 0):
       rear = 0
       queue[rear] = x
4. else:
       rear = rear + 1
       queue[rear] = x

-------------------------------------------------------------------------------------

Dequeue

Algorithm CIRCULAR_DEQUEUE():
1. if (front == -1):
       print "Queue Underflow"
2. item = queue[front]
3. if (front == rear):
       front = rear = -1   // queue becomes empty
4. else if (front == SIZE-1):
       front = 0
5. else:
       front = front + 1
6. return item

-------------------------------------------------------------------------------------

🔹 C Example Code

#include <stdio.h>
#define SIZE 5

int queue[SIZE];
int front = -1, rear = -1;

void enqueue(int x) {
    if ((front == 0 && rear == SIZE - 1) || (rear + 1 == front)) {
        printf("Queue Overflow\\n");
    } else if (front == -1) {
        front = rear = 0;
        queue[rear] = x;
    } else if (rear == SIZE - 1 && front != 0) {
        rear = 0;
        queue[rear] = x;
    } else {
        rear++;
        queue[rear] = x;
    }
    printf("%d enqueued\\n", x);
}

void dequeue() {
    if (front == -1) {
        printf("Queue Underflow\\n");
    } else {
        printf("%d dequeued\\n", queue[front]);
        if (front == rear) {
            front = rear = -1;
        } else if (front == SIZE - 1) {
            front = 0;
        } else {
            front++;
        }
    }
}

void display() {
    if (front == -1) {
        printf("Queue is Empty\\n");
        return;
    }
    printf("Queue: ");
    if (rear >= front) {
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
    } else {                                        this conditiom is used when rear < front
        for (int i = front; i < SIZE; i++)          It is used to display elements from front to end of array (like print last part of array)
            printf("%d ", queue[i]);
        for (int i = 0; i <= rear; i++)             It is used to display elements from start of array to rear (like print first part of array)
            printf("%d ", queue[i]);
    }
    printf("\\n");
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    enqueue(50);
    display();
    dequeue();
    enqueue(60);
    display();
    return 0;
}

output:

10 enqueued
20 enqueued
30 enqueued
40 enqueued
50 enqueued
Queue: 10 20 30 40 50 
10 dequeued
60 enqueued
Queue: 20 30 40 50 60 

--------------------------------------------------------------------------------
this is how display function works when rear < front

⚙️ Suppose queue size = 5

Let’s take SIZE = 5.

| Index  | 0  | 1    | 2 | 3     | 4  |
| ------ | -- | ---- | - | ----- | -- |
| Value  | 10 | 20   | — | 30    | 40 |
|        | ↑  | ↑    |   | ↑     | ↑  |
| rear=1 |    | rear |   | front |    |


So:
    front = 3  
    rear = 1

That gives us elements:
    queue[3] = 30
    queue[4] = 40
    queue[0] = 10
    queue[1] = 20

✅ Output → 30 40 10 20

Now to display:

    First loop prints queue[3], queue[4]
    Second loop prints queue[0], queue[1]


🧩 Now step-by-step function calls (the fun part!)

Let’s change main() a bit to see the interesting circular case:

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);
    enqueue(40);
    dequeue();  // removes 10
    dequeue();  // removes 20
    enqueue(50);
    enqueue(60);
    display();  // this will print 30, 40, 50, 60 (circular order)
}


🔍 Step-by-step trace
| Step | Operation   | front | rear        | Queue array          | Output      |
| ---- | ----------- | ----- | ----------- | -------------------- | ----------- |
| 1    | enqueue(10) | 0     | 0           | [10, -, -, -, -]     | 10 enqueued |
| 2    | enqueue(20) | 0     | 1           | [10, 20, -, -, -]    | 20 enqueued |
| 3    | enqueue(30) | 0     | 2           | [10, 20, 30, -, -]   | 30 enqueued |
| 4    | enqueue(40) | 0     | 3           | [10, 20, 30, 40, -]  | 40 enqueued |
| 5    | dequeue()   | 1     | 3           | [10, 20, 30, 40, -]  | 10 dequeued |
| 6    | dequeue()   | 2     | 3           | [10, 20, 30, 40, -]  | 20 dequeued |
| 7    | enqueue(50) | 2     | 4           | [10, 20, 30, 40, 50] | 50 enqueued |
| 8    | enqueue(60) | 2     | 0 (wrapped) | [60, 20, 30, 40, 50] | 60 enqueued |


Now, front = 2, rear = 0
Order is:
[30, 40, 50, 60]


Why it prints in that order
From index 2 → 4 → prints 30, 40, 50
Then wraps around and prints 0 → 0 → 60



-------------------------------------------------------------------------------

🔹 Real-Life Applications of Circular Queue

  Operating Systems → CPU scheduling (Round Robin).
  Buffer Management → When memory is reused (like streaming, video buffering).
  Traffic lights system → signals in a circular manner.

  
✅ So:

Queue = FIFO but linear, wastes space sometimes.
Circular Queue = FIFO but circular, reuses space efficiently.


-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------



3. Double-Ended Queue ( Deque (Double Ended Queue) )

A Deque (Double Ended Queue) is a type of queue in which insertion and deletion can be done from both ends:

  Front end
  Rear end

--> We can insert and delete from both front and rear.


🔹 Types of Deque

There are two restricted versions of deque:


Input-Restricted Deque

  Insertion (enqueue) → only at rear
  Deletion (dequeue) → from both ends


Output-Restricted Deque

  Deletion (dequeue) → only from front
  Insertion (enqueue) → at both ends


🔹 Example

Let’s take an empty deque of size 5:

[  ] [  ] [  ] [  ] [  ]
front = -1, rear = -1


Operations:

InsertRear(10) → [10]
InsertRear(20) → [10, 20]
InsertFront(5) → [5, 10, 20]
DeleteRear() → removes 20 → [5, 10]
DeleteFront() → removes 5 → [10]


🔹 Basic Operations in Deque

  InsertFront(x) → Insert at the front end.
  InsertRear(x) → Insert at the rear end.
  DeleteFront() → Remove from the front.
  DeleteRear() → Remove from the rear.
  GetFront() → Return front element.
  GetRear() → Return rear element.
  isEmpty() / isFull()



<------------------------------------------------------------------------------------->
simple double ended queue:
<------------------------------------------------------------------------------------->

✅ Simple Deque in C (Array Implementation)

#include <stdio.h>
#define SIZE 5

int deque[SIZE];
int front = -1, rear = -1;

// Insert at rear
void insertRear(int x) {
    if (rear == SIZE - 1) {
        printf("Deque Overflow\\n");
        return;
    }
    if (front == -1) front = 0;  // first element
    deque[++rear] = x;
    printf("%d inserted at rear\\n", x);
}

// Insert at front
void insertFront(int x) {
    if (front == 0) {
        printf("No space at front\\n");
        return;
    }
    if (front == -1) { // first element
        front = rear = 0;
    } else {
        front--;
    }
    deque[front] = x;
    printf("%d inserted at front\\n", x);
}

// Delete from front
void deleteFront() {
    if (front == -1) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from front\\n", deque[front]);
    if (front == rear) {
        front = rear = -1;
    } else {
        front++;
    }
}

// Delete from rear
void deleteRear() {
    if (rear == -1) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from rear\\n", deque[rear]);
    if (front == rear) {
        front = rear = -1;
    } else {
        rear--;
    }
}

// Display
void display() {
    if (front == -1) {
        printf("Deque is empty\\n");
        return;
    }
    printf("Deque: ");
    for (int i = front; i <= rear; i++) {
        printf("%d ", deque[i]);
    }
    printf("\\n");
}

int main() {
    insertRear(10);
    insertRear(20);
    insertFront(5);
    display();        // Deque: 5 10 20
    deleteFront();    // Removes 5
    display();        // Deque: 10 20
    deleteRear();     // Removes 20
    display();        // Deque: 10
    return 0;
}


🔹 Output

10 inserted at rear
20 inserted at rear
5 inserted at front
Deque: 5 10 20
5 deleted from front
Deque: 10 20
20 deleted from rear
Deque: 10


--------------------------------------------------------------------------------------

✅ Algorithms for Deque (Double Ended Queue)

1. Insert at Rear

Algorithm InsertRear(x):
1. If rear == SIZE - 1:
       Print "Overflow" and return
2. If front == -1:
       front = 0
3. rear = rear + 1
4. deque[rear] = x


2. Insert at Front

Algorithm InsertFront(x):
1. If front == 0:
       Print "No space at front" and return
2. If front == -1:      // Empty deque
       front = rear = 0
3. Else:
       front = front - 1
4. deque[front] = x


3. Delete from Front

Algorithm DeleteFront():
1. If front == -1:
       Print "Underflow" and return
2. Print deque[front] (deleted element)
3. If front == rear:    // Only one element
       front = rear = -1
4. Else:
       front = front + 1


4. Delete from Rear

Algorithm DeleteRear():
1. If rear == -1:
       Print "Underflow" and return
2. Print deque[rear] (deleted element)
3. If front == rear:    // Only one element
       front = rear = -1
4. Else:
       rear = rear - 1


5. Display

Algorithm Display():
1. If front == -1:
       Print "Deque is empty" and return
2. For i = front to rear:
       Print deque[i]

<------------------------------------------------------------------------------------->
<------------------------------------------------------------------------------------->

🔹 Algorithms

1. InsertFront(x)

Algorithm InsertFront(x):
1. IF (front == 0 AND rear == size-1) OR (front == rear+1) THEN
       PRINT "Overflow"
       EXIT
2. IF (front == -1) THEN        // Queue empty
       front ← 0
       rear ← 0
3. ELSE IF (front == 0) THEN
       front ← size-1
4. ELSE
       front ← front - 1
5. deque[front] ← x

-------------------------------------------------------------------------------------

2. InsertRear(x)

Algorithm InsertRear(x):
1. IF (front == 0 AND rear == size-1) OR (front == rear+1) THEN
       PRINT "Overflow"
       EXIT
2. IF (front == -1) THEN        // Queue empty
       front ← 0
       rear ← 0
3. ELSE IF (rear == size-1) THEN
       rear ← 0
4. ELSE
       rear ← rear + 1
5. deque[rear] ← x

-------------------------------------------------------------------------------------

3. DeleteFront()

Algorithm DeleteFront:
1. IF (front == -1) THEN
       PRINT "Underflow"
       EXIT
2. PRINT "Deleted element = ", deque[front]
3. IF (front == rear) THEN     // Only one element
       front ← -1
       rear ← -1
4. ELSE IF (front == size-1) THEN
       front ← 0
5. ELSE
       front ← front + 1

-------------------------------------------------------------------------------------

4. DeleteRear()

Algorithm DeleteRear:
1. IF (front == -1) THEN
       PRINT "Underflow"
       EXIT
2. PRINT "Deleted element = ", deque[rear]
3. IF (front == rear) THEN     // Only one element
       front ← -1
       rear ← -1
4. ELSE IF (rear == 0) THEN
       rear ← size-1
5. ELSE
       rear ← rear - 1

-------------------------------------------------------------------------------------

5. GetFront()

Algorithm GetFront:
1. IF (front == -1) THEN
       PRINT "Queue is Empty"
   ELSE
       PRINT "Front element = ", deque[front]


6. GetRear()

Algorithm GetRear:
1. IF (rear == -1) THEN
       PRINT "Queue is Empty"
   ELSE
       PRINT "Rear element = ", deque[rear]

-------------------------------------------------------------------------------------

🔹 C Example (Simple Circular Array Implementation)

#include <stdio.h>
#define SIZE 5

int deque[SIZE];
int front = -1, rear = -1;

int isFull() {
    return (front == 0 && rear == SIZE - 1) || (front == rear + 1);
}

int isEmpty() {
    return (front == -1);
}

void insertFront(int x) {
    if (isFull()) {
        printf("Deque Overflow\\n");
        return;
    }
    if (front == -1) {
        front = rear = 0;
    } else if (front == 0) {
        front = SIZE - 1;
    } else {
        front--;
    }
    deque[front] = x;
    printf("%d inserted at front\\n", x);
}

void insertRear(int x) {
    if (isFull()) {
        printf("Deque Overflow\\n");
        return;
    }
    if (front == -1) {
        front = rear = 0;
    } else if (rear == SIZE - 1) {
        rear = 0;
    } else {
        rear++;
    }
    deque[rear] = x;
    printf("%d inserted at rear\\n", x);
}

void deleteFront() {
    if (isEmpty()) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from front\\n", deque[front]);
    if (front == rear) {
        front = rear = -1;
    } else if (front == SIZE - 1) {
        front = 0;
    } else {
        front++;
    }
}

void deleteRear() {
    if (isEmpty()) {
        printf("Deque Underflow\\n");
        return;
    }
    printf("%d deleted from rear\\n", deque[rear]);
    if (front == rear) {
        front = rear = -1;
    } else if (rear == 0) {
        rear = SIZE - 1;
    } else {
        rear--;
    }
}

void display() {
    if (isEmpty()) {
        printf("Deque is empty\\n");
        return;
    }
    printf("Deque: ");
    int i = front;
    while (1) {
        printf("%d ", deque[i]);
        if (i == rear) break;
        i = (i + 1) % SIZE;
    }
    printf("\\n");
}

int main() {
    insertRear(10);
    insertRear(20);
    insertFront(5);
    display();     // Deque: 5 10 20
    deleteRear();  // removes 20
    display();     // Deque: 5 10
    deleteFront(); // removes 5
    display();     // Deque: 10
    return 0;
}

--------------------------------------------------------------------------------------

🔹 Real-Life Applications of Deque

  Browser history (forward/backward navigation).
  Undo/Redo functionality in editors.
  Task scheduling in operating systems.
  Sliding window problems (used in many algorithms).

✅ In short:

Queue → FIFO (First In, First Out).
Deque → Flexible queue, insert/delete from both ends.


-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------


4. Priority Queue

A priority queue is like a queue, but every element has a priority.
👉 The element with highest priority is served first.
👉 If two elements have the same priority, they follow FIFO (like normal queue).

A Priority Queue is an abstract data type that operates similar to a regular queue but with an added feature: each element has a priority associated with it. Elements with higher priority are served before elements with lower priority. 
If two elements have the same priority, they are served according to their order in the queue (FIFO for same priority).


➡️ In a normal queue, elements are served in First In First Out (FIFO) order.
➡️ In a priority queue, elements are served according to priority, not arrival order.

🧩 Types of Priority Queues

| Type                          | Description                                    |
| ----------------------------- | ---------------------------------------------- |
| Ascending Priority Queue      | Lower number = higher priority (1 is highest)  |
| Descending Priority Queue     | Higher number = higher priority (9 is highest) |


Enqueue Algorithm:

1. If n == SIZE, then print Overflow (queue full) and return.
2. Set i = n - 1.
3. While i >= 0 and pq[i] > value:
    Move pq[i] to pq[i+1].                                    this measn shift right
    Decrease i by 1.
4. Insert value at position i+1.                              this means insert at correct position            
5. Increase n by 1.
6. Print that element is inserted.


like you have 30, and you enter 10 so first 30 will be shift right like this  [30, 30, _, _, _] and then 10 will be insert at correct position like this [10, 30, _, _, _]

step by step example:

you have pq[10,30,_,_,_], i value of i = 1 and you want to insert 20 so first 30 will be shift right like this [10,30,30,_,_] pq[i] = pq[i+1] (pq[1] = pq[2]), 
  and then 20 will be insert at correct position like this [10,20,30,_,_] i = i - 1, 
  i = 0, pq[i] = 10, 10 > 20 is false so loop will be terminate and then 20 will be insert at correct position like this [10,20,30,_,_], pq[i+1] = value (pq[1] = 20)

--------------------------------------------------------------------------------------

Dequeue Algorithm:

1. If n == 0, then print Underflow (queue empty) and return.
2. Print pq[0] as the deleted element.
3. For i = 0 to n-2:
    Move pq[i+1] into pq[i].
4. Decrease n by 1


--------------------------------------------------------------------------------------

Display Algorithm:

1. If n == 0, then print "Queue is empty" and return.
2. For i = 0 to n-1:
    Print pq[i].
    
--------------------------------------------------------------------------------------

🔹 Implementation Methods

We can implement Priority Queue in different ways:

    Using Array (simple, but searching for highest priority takes O(n)).
    Using Linked List.
    Using Heap (Binary Heap) → most efficient (O(log n)).

🔹 C Example (Array Implementation)

#include <stdio.h>
#define SIZE 5

int pq[SIZE];    // priority queue array
int n = 0;       // current size

// Function to insert element in priority queue
void enqueue(int value) {
    if (n == SIZE) {
        printf("Priority Queue Overflow\\n");
        return;
    }
    int i = n - 1;
    // Shift elements to maintain ascending order
    while (i >= 0 && pq[i] > value) {                       you only change for descending priority queue pq[i] < value
        pq[i + 1] = pq[i];
        i--;
    }
    pq[i + 1] = value;
    n++;
    printf("%d inserted\\n", value);
}

// Function to remove element with highest priority (smallest value)
void dequeue() {
    if (n == 0) {
        printf("Priority Queue Underflow\\n");
        return;
    }
    printf("%d deleted (highest priority)\\n", pq[0]);
    for (int i = 0; i < n - 1; i++) {                          -> this for loop is used to shift left all elements after dequeue operation
        pq[i] = pq[i + 1];
    }
    n--;
}

// Display queue
void display() {
    if (n == 0) {
        printf("Priority Queue is Empty\\n");
        return;
    }
    printf("Priority Queue: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", pq[i]);
    }
    printf("\\n");
}

int main() {
    enqueue(30);
    enqueue(10);
    enqueue(20);
    display();      // Priority Queue: 10 20 30
    dequeue();      // Removes 10
    display();      // Priority Queue: 20 30
    return 0;
}


--------------------------------------------------------------------------------
🔹 Real-Life Applications of Priority Queue

Operating System → process scheduling (high priority process runs first).
Dijkstra’s Algorithm → shortest path uses a priority queue.
Huffman Coding → used in data compression.
Emergency systems → patients/jobs handled by priority.
Printer tasks → urgent documents printed before normal ones.


✅ In short:

Normal Queue → FIFO (First In First Out)

Priority Queue → Highest priority element first
    `
    },
    {
      id: 5,
      question: "5. Explain the difference between primitive and non-primitive data structures with suitable examples.",
      answer: "",
      codeExample: `

Primitive Data Structures

  They are the basic data types built into the programming language.
  They can store only one value at a time.
  Operations on them are directly supported by the compiler.
  They are simple and fast to use.
  Examples: int, float, char, double, boolean.

🔹 Primitive Example

#include <stdio.h>
int main() {
    int age = 21;       // Primitive: int
    char grade = 'A';   // Primitive: char
    printf("Age: %d, Grade: %c\\n", age, grade);
    return 0;
}



Non-Primitive Data Structures

  They are derived from primitive data types.
  They can store multiple values and can represent complex relationships.
  Operations on them require algorithms and functions (not directly by compiler).
  They are more flexible and powerful, used in solving real-world problems.
  Examples:
      Linear: Array, Stack, Queue, Linked List
      Non-Linear: Tree, Graph

🔹 Non-Primitive Example (Array)

#include <stdio.h>
int main() {
    int arr[3] = {10, 20, 30};   // Non-Primitive: Array
    printf("Array: %d %d %d\\n", arr[0], arr[1], arr[2]);
    return 0;
}

      
📊 Side-by-Side Comparison

| Primitive Data Structures      | Non-Primitive Data Structures                           |
| ------------------------------ | ------------------------------------------------------- |
| Basic and fundamental          | Derived from primitive types                            |
| Store a single value           | Store multiple values                                   |
| Directly supported by compiler | Need algorithms/functions for operations                |
| Simple to use                  | More complex but powerful                               |
| Examples: int, float, char     | Examples: Array, Stack, Queue, Linked List, Tree, Graph |
`
    },
    {
      id: 6,
      question: "6. What is a sparse matrix? Discuss its storage representation and explain why it is more efficient than a normal 2D array in certain cases.",
      answer: "",
      codeExample: `
📌 What is a Sparse Matrix?

👉 A sparse matrix is a matrix (2D array) that has mostly zero elements and only a few non-zero elements.
👉 Instead of storing all elements (including zeros), we store only the non-zero elements with their positions.


🔹 Example of Normal Matrix

Matrix (4 × 5):
                    columns ->
                   0   1   2   3   4
                 _____________________
         r    0  | 0   0   0   9   0  |
         o    1  | 0   8   0   0   0  |
         w    2  | 0   0   0   0   0  |
         s    3  | 5   0   0   0   0  |
                 |____________________|

👉 Total elements = 4 × 5 = 20
👉 Non-zero elements = 3 (9, 8, 5)
👉 Zero elements = 17

📌 Storage Representation of Sparse Matrix
1. Array Representation (Triplet Form)

We store only row, column, value of non-zero elements in a 2D array.

Example for above matrix:
    
| Row | Col | Value |
| --- | --- | ----- |
| 0   | 3   | 9     |
| 1   | 1   | 8     |
| 3   | 0   | 5     |


📌 Why is it Efficient Compared to Normal 2D Array?

✅ Memory Efficient

    Normal matrix stores all elements (including zeros).
    Sparse matrix stores only non-zero elements.
    Saves a lot of memory when the matrix is large with very few non-zero elements.


✅ Faster Operations

    Operations (like addition, multiplication) are performed only on non-zero elements.
    Saves time compared to processing all zeros.


✅ Useful in Real Applications

    Image processing
    Graph algorithms (adjacency matrix of sparse graphs)
    Machine learning (storing word frequency matrices, which are mostly zeros)

-------------------------------------------------------------------------------

📊 Comparison Example

Normal 2D array of size 1000 × 1000 = 1,000,000 elements
    If only 1000 elements are non-zero → storing full array wastes space.

Sparse matrix storage → only 1000 × 3 = 3000 entries needed (row, col, value).
    👉 Saves almost 99.7% memory.


✅ Final Summary

Sparse Matrix = Matrix with mostly zeros.
Storage = Triplet (row, col, value) array OR linked list.
Advantage = Saves memory + faster operations when non-zero elements are very few.
    `
    },
    {
      id: 7,
      question: "7. Differentiate between simple queue, circular queue, and priority queue. Provide real-life examples where each type can be applied.",
      answer: "",
      codeExample: `
📊 Comparison of Simple Queue, Circular Queue, and Priority Queue

| Simple Queue                                                  | Circular Queue                                                          | Priority Queue                                                                 |
| ------------------------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| Works on FIFO (First In First Out) principle                  | Also follows FIFO but uses circular structure                           | Serves elements based on priority, not just order                              |
| Insertions happen at the rear, deletions at the front         | Insertions and deletions happen circularly (rear and front wrap around) | Insertion based on priority, deletion removes the highest priority element     |
| Causes memory wastage when front moves forward                | Efficiently reuses memory, no wastage                                   | Memory usage depends on number of elements and priorities                      |
| Easy to implement but less efficient for large data           | More efficient than simple queue for continuous insert/delete           | More complex to implement than simple and circular queue                       |
| Example: People waiting in a ticket counter line              | Example: Round-robin CPU scheduling                                     | Example: Emergency room in a hospital, airline boarding                        |

      `
    },
    {
      id: 8,
      question: "8. Explain Linked List?",
      answer: "",
      codeExample: `
📌 What is a Linked List?

👉 A linked list is a linear data structure where elements (called nodes) are stored at different memory locations and are connected using pointers.
👉 Unlike arrays, linked lists do not store elements in contiguous (next-to-next) memory blocks.


📌 Structure of a Node

Each node in a linked list has two parts:
    Data → The value (like number, character, etc.)
    Pointer (next) → Address of the next node

Diagram:
  [Data | Next] → [Data | Next] → [Data | Next] → NULL

📌 Types of Linked Lists

Singly Linked List

    Each node points to the next node.
    Traversal is only in one direction.

Head → [10 | Next] → [20 | Next] → [30 | Next] → NULL


Doubly Linked List

    Each node has two pointers: one to the next node and one to the previous node.
    Traversal is possible in both directions.

NULL ← [10 | Prev, Next] ↔ [20 | Prev, Next] ↔ [30 | Prev, Next] → NULL


Circular Linked List

    Last node points back to the first node instead of NULL.
    Can be singly or doubly circular.

[10 | Next] → [20 | Next] → [30 | Next] ↘
     ↑-----------------------------←


--------------------------------------------------------------------------------

📌 Basic Operations on Linked List

1. Insertion

  At beginning
  At end
  At a given position


2. Deletion

  From beginning
  From end
  From a given position


3. Traversal
  Visiting each node one by one.


--------------------------------------------------------------------------------
📌 Advantages of Linked List over Array

Dynamic size → Can grow or shrink at runtime (no fixed size like array).
Efficient insertion & deletion → No shifting of elements needed.

📌 Disadvantages

Uses extra memory for storing pointers.
Access is sequential (to access middle element, you must traverse from the start).
Slower compared to arrays for random access.


📌 Real-life Examples

  Music Playlist → Next song pointer links to another song.
  Image Viewer → Next and previous buttons are like a doubly linked list.
  Browser History → Forward and backward navigation.


✅ Final Summary:
A Linked List is a collection of nodes connected using pointers. It is flexible (dynamic size), allows easy insertions/deletions, but is slower for searching compared to arrays.


    `
    },
    {
      id: 9,
      question: "9. Explain Singly Linked List.",
      answer: "",
      codeExample: `
📌 What is a Singly Linked List?

👉 A Singly Linked List (SLL) is a type of linked list where each node contains:

    Data → actual value stored.
    Next pointer → address of the next node.

👉 The last node’s pointer stores NULL (end of list).


📌 Structure of a Node

struct Node {
    int data;              // value
    struct Node* next;     // pointer to next node
};

📌 Diagram of Singly Linked List

    Head → [10 | Next] → [20 | Next] → [30 | Next] → NULL

Head = pointer to the first node.
Each node points to the next node.
Last node points to NULL.


📌 Operations on Singly Linked List

1. Traversal (visiting all nodes)

    Start from head.
    Print data of each node.
    Move to next until NULL.


2. Insertion

    At Beginning:

        Create a new node.
        Point new node’s next to head.
        Move head to new node.

    At End:

        Create new node.
        Traverse to last node.
        Set last node’s next = new node.

    At Position:

        Traverse to position.
        Link new node’s next to next node.
        Update previous node’s next.


3. Deletion

    From Beginning: Move head to head->next.
    From End: Traverse till second-last node, set its next = NULL.
    From Position: Adjust next pointers to skip the deleted node.

--------------------------------------------------------------------------------

📌 Advantages of Singly Linked List

    ✅ Dynamic memory allocation (size grows/shrinks).
    ✅ Easy insertion/deletion (no shifting like arrays).

📌 Disadvantages

    ❌ Cannot traverse backwards.
    ❌ Uses extra memory (for storing pointer).
    ❌ Sequential access only (no direct indexing).

✅ Final Summary

A Singly Linked List is a collection of nodes where each node points to the next.

    Operations: Insertion, Deletion, Traversal.
    Advantage: Dynamic size, efficient insert/delete.
    Disadvantage: No backward traversal, slower access.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

📌 Example in C (Basic Traversal & Insertion at End)

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at end
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
}

// Display
void display() {
    struct Node* temp = head;
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

int main() {
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);
    display();  // Output: 10 → 20 → 30 → NULL
    return 0;
}

<-------------------------------------------------------------------------------->
<-------------------------------------------------------------------------------->

The Line:
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));

1. General malloc syntax

In C, malloc is used to allocate memory at runtime.

General form:
    (castType*) malloc(size_in_bytes);

malloc(size_in_bytes) → allocates that many bytes in heap memory.
(castType*) → converts the generic pointer returned by malloc (which is void*) into the correct pointer type you need.


2. Breaking down your line
    struct Node* newNode

Declares a pointer variable newNode that can point to a struct Node.

    malloc(sizeof(struct Node))

sizeof(struct Node) → calculates how many bytes are needed to store one struct Node.
Example: If struct Node has an int (4 bytes) and a pointer (8 bytes), sizeof(struct Node) = 12 (actually usually aligned to 16).
malloc(...) → allocates that much space in heap memory.
Returns a void* (a generic pointer).

    (struct Node*)

Casts that generic pointer into a pointer-to-struct Node.
So we can safely assign it to newNode.


3. Why not just malloc(...) without cast?

In C, the cast is optional:
    struct Node* newNode = malloc(sizeof(struct Node));


✅ works fine.

In C++, malloc requires a cast.
That’s why many C programmers add (struct Node*) even in C — habit from C++ or to make it explicit.


4. What happens in memory?

Let’s say we call:

struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));


Steps:

    sizeof(struct Node) → suppose it is 16 bytes.
    malloc(16) → asks the OS for 16 bytes in heap memory, say at address 2000.
    Returns void* → (void*)2000.
    (struct Node*) → cast to (struct Node*)2000.
    Assign to newNode.

Now:
    newNode → address 2000


At address 2000, memory is reserved for one struct Node:

    [ data | next ]

(but both fields have garbage values until we set them).


5. Why we use this in linked list

Because each time we call insertEnd(value), we need a new node.
malloc ensures each node is stored dynamically in heap memory, not just in a temporary variable that disappears when the function ends.

✅ So simplified:

    malloc(sizeof(struct Node)) → reserve space for one Node.
    (struct Node*) → tell the compiler “this is a pointer to Node”.
    newNode → holds the address of that space.

<-------------------------------------------------------------------------------->

why you used ->

Without ->

If you have a normal struct (not a pointer), you use dot (.):

    student.roll = 10;


But if you have a pointer to struct, you must first dereference (*) then use dot:

    (*newNode).data = 10;

This looks messy 😵.


With ->

C gives us a shortcut:

    newNode->data = 10;

✅ It means the same as (*newNode).data.

Why we need it here?

Because malloc returns a pointer.

    struct Node* newNode = malloc(sizeof(struct Node));

So newNode is a pointer, not a direct struct.
That’s why we use -> instead of ..


👉 In short:

. → for struct variables.
-> → for struct pointers.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

1. What is a struct in C?

A struct (short for structure) in C is a way to group different pieces of data together under one name.

👉 Example in real life:
Imagine a student record. A student has:

    a roll number (integer)
    a name (string)
    a percentage (float)
If we didn’t have struct, we would need 3 separate variables:

    int roll;
    char name[50];
    float percentage;

But then how do we know these 3 belong to the same student?
They are separate. That’s a problem. 😕


With struct, we can group them into one unit:

    struct Student {
        int roll;
        char name[50];
        float percentage;
    };

Now we can create a student:

    struct Student s1;

And store values like this:

    s1.roll = 1;
    strcpy(s1.name, "Raj");
    s1.percentage = 89.5;

✅ Now all data about one student is in one place.


2. How does this connect to linked list?

A linked list needs a special box (a "node").
Each box must store two things:

    The data (like 10, 20, 30)
    The address of the next box (so we can move forward in the chain).

So we define:

    struct Node {
        int data;           // store the value
        struct Node* next;  // pointer to the next node
    };

Here:

int data → the value inside the node (like 10).
struct Node* next → a pointer that points to the next node in the list.
That’s why we need struct → because a node is a custom data type that contains two things together.


3. Why struct Node* next; is special?

Notice something tricky: inside struct Node, we are declaring struct Node* next.

This means:

    Every node stores a pointer to another Node type.
    That creates a chain of nodes.

This is how we get a linked list:
    [ data | next ] --> [ data | next ] --> [ data | next ] --> NULL

Without struct, we couldn’t create this custom box with data + pointer.


4. Step-by-step in your program

Let’s connect this to your code.
Struct definition

    struct Node {
        int data;
        struct Node* next;
    };

Defines the structure of one node.
Each node stores an integer (data) and a pointer to another node (next).

Head pointer
    struct Node* head = NULL;

head is a pointer to the first node in the list.
If the list is empty, head = NULL.

Think of head as the "entry gate" to your linked list. Without it, you don’t know where the list starts.

------------------------------------------------------------------------------

Inserting
When you call insertEnd(10):

    A new node is created with data = 10 and next = NULL.
    Since head is NULL (list empty), this new node becomes the first node (head = newNode).

Now memory looks like:

    head --> [10 | NULL]

When you call insertEnd(20):

    New node made → [20 | NULL].
    Traverse the list until the last node (10).
    Attach the new node at the end.

Now:
    head --> [10 | *] --> [20 | NULL]


When you call insertEnd(30):
    head --> [10 | *] --> [20 | *] --> [30 | NULL]


Display

The display() function just follows the chain:

    Start at head.
    Print data.
    Move to next.
    Stop when next = NULL.

Output:
    10 → 20 → 30 → NULL


5. Why not use just arrays?

Good question!
We could store numbers in an array: [10, 20, 30].


But arrays have problems:

    Fixed size (must know in advance).
    Inserting/deleting in middle requires shifting elements.


Linked lists are better for:

    Dynamic size (grow/shrink easily).
    Easy insertion and deletion.


✅ Summary in very simple words:

    A struct lets us create a custom box.
    Here, the box is a Node: it stores data + pointer to the next node.
    head remembers where the first box is.
    By connecting boxes, we make a linked list.

--------------------------------------------------------------------------------
--------------------------------------------------------------------------------

hello i mean why you used Node* struct syntax is struct keyword next structure name than variable name ?

    struct Node* next;

instead of just struct Node next; or something else.
Let’s unpack this carefully.


1. General struct variable syntax in C

When we declare a variable of a struct, the normal rule is:

    struct StructureName variableName;


Example:

struct Student {
    int roll;
    char name[20];
};

struct Student s1;  // s1 is a struct Student variable



2. Why struct Node* next; has a *

Because here we don’t want to store another whole Node, we only want to store a pointer (address) to a Node.

Case A: If we wrote

    struct Node next;

That means every Node would directly contain another Node inside it.
But then that Node would also contain another Node… and so on → infinite nesting 😵.
That’s impossible.


Case B: If we write

    struct Node* next;

Now next is just a pointer (address) that refers to another Node.
So each Node just says:
“Here’s my data, and here’s the address where the next Node lives.”

3. Breaking it down word by word

    struct Node* next;

struct → tells C that we’re using a structure type.
Node → the name of the structure (defined above).
* → makes it a pointer type.
next → the variable name (inside the struct).


4. Why not Node* next; only?

In plain C, you must write struct Node because the keyword struct is required unless you use a typedef.
If we add a typedef:

    typedef struct Node {
        int data;
        struct Node* next;
    } Node;

Now we can just write:
    Node* next;
    
because Node is now a type name on its own.


✅ Summary

Normal struct variable → struct Node n1; (a full node).
Pointer to struct → struct Node* next; (just the address of another node).
We use pointer, not full struct, to avoid infinite nesting and to link nodes dynamically in memory.


---------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------

🔹 What is malloc?

In C language, malloc stands for Memory Allocation.
It is a function used to dynamically allocate memory at runtime (i.e., while the program is running).

It is defined in the stdlib.h header file.

🔹 Syntax:
    ptr = (castType*) malloc(size_in_bytes);

ptr → pointer that stores the base address of allocated memory.
castType → type of pointer (like int*, float*).
size_in_bytes → how many bytes of memory you want.

🔹 Example:

#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr;
    int n = 5;

    // allocate memory for 5 integers
    arr = (int*) malloc(n * sizeof(int));

    if (arr == NULL) {
        printf("Memory not allocated!\\n");
        return 1;
    }

    // initialize and print array
    for (int i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    printf("Array elements: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    // free allocated memory
    free(arr);

    return 0;
}



🔹 Explanation:

malloc(n * sizeof(int)) → allocates memory for n integers.
    If n = 5 → and sizeof(int) = 4 bytes, then total = 5 * 4 = 20 bytes.
Returns a pointer to the first byte of memory (base address).
If memory allocation fails, malloc returns NULL.
After use, we must free memory using free() to avoid memory leaks.

🔹 Why use malloc?

Normal arrays like int arr[10]; are static (size fixed at compile time).
malloc allows us to allocate memory dynamically at runtime, depending on user input or conditions.

✅ Example use case:
If you are writing a program to store student marks and the number of students is not known in advance, 
you can ask the user for input and allocate memory accordingly with malloc.

`
    },
    {
      id: 9.1,
      question: "9.1. Explain Singly Linked List Algorithms",
      answer: "",
      codeExample: `
Singly Linked List (SLL) Algorithms

Structure of Node

Structure Node
    data : integer
    next : pointer to Node
End Structure

head : pointer to Node (initially NULL)


1. Insertion Algorithms
(a) Insertion at Beginning

Algorithm InsertAtBeginning(value):
1. Create a new node NEW
2. NEW.data ← value
3. NEW.next ← head
4. head ← NEW
5. Exit


(b) Insertion at End

Algorithm InsertAtEnd(value):
1. Create a new node NEW
2. NEW.data ← value
3. NEW.next ← NULL
4. If head = NULL then
       head ← NEW
       Exit
5. Set TEMP ← head
6. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
7. TEMP.next ← NEW
8. Exit


(c) Insertion at Specific Position

Algorithm InsertAtPosition(value, pos):
1. Create a new node NEW
2. NEW.data ← value
3. If pos = 1 then
       NEW.next ← head
       head ← NEW
       Exit
4. Set TEMP ← head, i ← 1
5. While i < pos-1 and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
6. If TEMP = NULL then
       Print "Invalid Position"
       Exit
7. NEW.next ← TEMP.next
8. TEMP.next ← NEW
9. Exit


2. Deletion Algorithms
(a) Deletion from Beginning

Algorithm DeleteFromBeginning():
1. If head = NULL then
       Print "Underflow"
       Exit
2. TEMP ← head
3. head ← head.next
4. Free TEMP
5. Exit


(b) Deletion from End

Algorithm DeleteFromEnd():
1. If head = NULL then
       Print "Underflow"
       Exit
2. If head.next = NULL then
       Free head
       head ← NULL
       Exit
3. Set TEMP ← head
4. While TEMP.next.next ≠ NULL do
       TEMP ← TEMP.next
5. Free TEMP.next
6. TEMP.next ← NULL
7. Exit


(c) Deletion from Specific Position

Algorithm DeleteFromPosition(pos):
1. If head = NULL then
       Print "Underflow"
       Exit
2. If pos = 1 then
       TEMP ← head
       head ← head.next
       Free TEMP
       Exit
3. Set TEMP ← head, i ← 1
4. While i < pos-1 and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
5. If TEMP = NULL or TEMP.next = NULL then
       Print "Invalid Position"
       Exit
6. NODE ← TEMP.next
7. TEMP.next ← NODE.next
8. Free NODE
9. Exit


✅ Now you have complete, step-by-step algorithms for:

Insertion: At Beginning, At End, At Position

Deletion: From Beginning, From End, From Position


<--------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------->


full example in C

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at Beginning
void insertBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = head;
    head = newNode;
    printf("%d inserted at beginning\\n", value);
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        head = newNode;
    } else {
        struct Node* temp = head;
        while (temp->next != NULL) {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    printf("%d inserted at end\\n", value);
}

// Insert at Position
void insertPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        newNode->next = head;
        head = newNode;
        printf("%d inserted at position %d\\n", value, pos);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {          \\ and you enter position 3 your loop is run one time 
        temp = temp->next;  
    }

    if (temp == NULL) {                                  \\like you have 2 node you enter 4 so temp is null
        printf("Invalid Position!\\n");
        free(newNode);
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
    printf("%d inserted at position %d\\n", value, pos);
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;
    printf("%d deleted from beginning\\n", temp->data);
    free(temp);
}

// Delete from End
void deleteEnd() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    if (head->next == NULL) {   
        printf("%d deleted from end\\n", head->data);
        free(head);
        head = NULL;
        return;
    }
    struct Node* temp = head;
    while (temp->next->next != NULL) {
        temp = temp->next;
    }
    printf("%d deleted from end\\n", temp->next->data);
    free(temp->next);                                     // delete last node like temp->next is 300 so free(300)
    temp->next = NULL;                                    // adter deleting last node set second last node next to null like temp->next = 300 t0 temp->next = null
}

// Delete from Position
void deletePosition(int pos) {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    if (pos == 1) {
        struct Node* temp = head;
        head = head->next;
        printf("%d deleted from position %d\\n", temp->data, pos);
        free(temp);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL || temp->next == NULL) {
        printf("Invalid Position!\\n");
        return;
    }

    struct Node* del = temp->next;
    temp->next = del->next;
    printf("%d deleted from position %d\\n", del->data, pos);
    free(del);
}

// Display List
void display() {
    struct Node* temp = head;
    if (temp == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    printf("Linked List: ");
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

// Main Function
int main() {
    insertBeginning(10);
    insertEnd(20);
    insertEnd(30);
    insertPosition(15, 2);
    display();   // 10 → 15 → 20 → 30 → NULL

    deleteBeginning();
    display();   // 15 → 20 → 30 → NULL

    deleteEnd();
    display();   // 15 → 20 → NULL

    deletePosition(2);
    display();   // 15 → NULL

    return 0;
}



-----------------------------------------------------------------------

✅ Explanation of Example Run

Insert at beginning → 10

Insert at end → 20, 30

Insert at position 2 → 15
List: 10 → 15 → 20 → 30 → NULL

Delete from beginning → removes 10
List: 15 → 20 → 30 → NULL

Delete from end → removes 30
List: 15 → 20 → NULL

Delete from position 2 → removes 20
List: 15 → NULL




note:

head -> next mean

👉 Head jo pehle node ko point karta hai, uske next pointer me agli node ka address stored hota hai.

So:

head → pehle node ka address rakhta hai
head->next → dusre node ka address rakhta hai
head->next->data → dusre node ka data


Example:
    head → [10 | next] → [20 | next] → [30 | NULL]

head->data = 10
head->next → dusre node ka address (20 wala node)
head->next->data = 20

`
    },
    {
      id: 10,
      question: "10. Explain Doubly Linked List.",
      answer: "",
      codeExample: `
📘 Doubly Linked List (DLL)

A Doubly Linked List is a special type of linked list where:

Each node has three parts:

    prev → pointer to the previous node
    data → the actual data stored
    next → pointer to the next node

Unlike a Singly Linked List (which can only be traversed in one direction), DLL can be traversed in both directions (forward and backward).

🔹 Structure of Node (in C)

struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

🔹 Diagram
         NULL ← [prev | 10 | next] ↔ [prev | 20 | next] ↔ [prev | 30 | next] → NULL

Here:

    First node’s prev = NULL (because no node before it)
    Last node’s next = NULL (because no node after it)
    Every middle node is connected in both directions

🔹 Basic Operations in DLL

1. Insertion

    At Beginning
    At End
    At a Specific Position


2. Deletion

    From Beginning
    From End
    From a Specific Position


3. Traversal

    Forward (head → tail)
    Backward (tail → head)


🔹 Advantages of DLL

    ✅ Can be traversed in both directions
    ✅ Easier to delete nodes (no need to traverse from head to find previous node)
    ✅ More flexible than singly linked list


🔹 Disadvantages of DLL

    ❌ Requires extra memory for the prev pointer
    ❌ Slightly more complex to implement than SLL


🔹 Real-life Examples

    Web Browser History → You can go forward and backward between visited pages.
    Music Playlist → Move next or previous song easily.
    Undo/Redo in Text Editors → You can move back and forward between states.

<--------------------------------------------------------------------------------->

<--------------------------------------------------------------------------------->


✅ Full C Program: Doubly Linked List

#include <stdio.h>
#include <stdlib.h>

// Structure of a Doubly Linked List Node
struct Node {
    int data;
    struct Node* prev;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at Beginning
void insertBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->prev = NULL;
    newNode->next = head;

    if (head != NULL)
        head->prev = newNode;

    head = newNode;
    printf("%d inserted at beginning\\n", value);
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        newNode->prev = NULL;
        head = newNode;
        printf("%d inserted at end\\n", value);
        return;
    }

    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }

    temp->next = newNode;
    newNode->prev = temp;
    printf("%d inserted at end\\n", value);
}

// Insert at Specific Position
void insertPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        newNode->prev = NULL;
        newNode->next = head;
        if (head != NULL)
            head->prev = newNode;               // old head points back to new node
        head = newNode;
        printf("%d inserted at position %d\\n", value, pos);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\n");
        free(newNode);
        return;
    }

    newNode->next = temp->next;
    newNode->prev = temp;

    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    printf("%d inserted at position %d\\n", value, pos);
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;

    if (head != NULL)
        head->prev = NULL;

    printf("%d deleted from beginning\\n", temp->data);
    free(temp);
}

// Delete from End
void deleteEnd() {
    if (head == NULL) {
        printf("List is Empty!\n");
        return;
    }

    // only one node
    if (head->next == NULL) {
        printf("%d deleted from end\n", head->data);
        free(head);
        head = NULL;
        return;
    }

    struct Node* temp = head;

    // stop at SECOND LAST node
    while (temp->next->next != NULL) {
        temp = temp->next;
    }

    printf("%d deleted from end\n", temp->next->data);
    free(temp->next);
    temp->next = NULL;
}

// Delete from Specific Position
void deletePosition(int pos) {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }

    struct Node* temp = head;

    if (pos == 1) {
        head = head->next;
        if (head != NULL)
            head->prev = NULL;
        printf("%d deleted from position %d\\n", temp->data, pos);
        free(temp);
        return;
    }

    for (int i = 1; i < pos && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\n");
        return;
    }

    if (temp->prev != NULL)
        temp->prev->next = temp->next;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    printf("%d deleted from position %d\\n", temp->data, pos);
    free(temp);
}

// Display Forward
void displayForward() {
    struct Node* temp = head;
    if (temp == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    printf("Forward: ");
    while (temp != NULL) {
        printf("%d ↔ ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\n");
}

// Display Backward
void displayBackward() {
    if (head == NULL) {
        printf("List is Empty!\\n");
        return;
    }
    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }

    printf("Backward: ");
    while (temp != NULL) {
        printf("%d ↔ ", temp->data);
        temp = temp->prev;
    }
    printf("NULL\\n");
}

// Main Function
int main() {
    insertBeginning(10);
    insertEnd(20);
    insertEnd(30);
    insertPosition(15, 2);
    displayForward();   // 10 ↔ 15 ↔ 20 ↔ 30 ↔ NULL
    displayBackward();  // 30 ↔ 20 ↔ 15 ↔ 10 ↔ NULL

    deleteBeginning();
    displayForward();   // 15 ↔ 20 ↔ 30 ↔ NULL

    deleteEnd();
    displayForward();   // 15 ↔ 20 ↔ NULL

    deletePosition(2);
    displayForward();   // 15 ↔ NULL

    return 0;
}


✅ Example Output
10 inserted at beginning
20 inserted at end
30 inserted at end
15 inserted at position 2
Forward: 10 ↔ 15 ↔ 20 ↔ 30 ↔ NULL
Backward: 30 ↔ 20 ↔ 15 ↔ 10 ↔ NULL
10 deleted from beginning
Forward: 15 ↔ 20 ↔ 30 ↔ NULL
30 deleted from end
Forward: 15 ↔ 20 ↔ NULL
20 deleted from position 2
Forward: 15 ↔ NULL


---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

📘 Algorithms for Doubly Linked List

🔹 Structure of Node

Structure Node
    data : integer
    prev : pointer to Node
    next : pointer to Node
End Structure

head : pointer to Node (initially NULL)


✅ 1. Insertion Algorithms
(a) Insertion at Beginning

Algorithm InsertAtBeginning(value):
1. Create NEW node
2. NEW.data ← value
3. NEW.prev ← NULL
4. NEW.next ← head
5. If head ≠ NULL then
       head.prev ← NEW
6. head ← NEW
7. Exit


(b) Insertion at End

Algorithm InsertAtEnd(value):
1. Create NEW node
2. NEW.data ← value
3. NEW.next ← NULL
4. If head = NULL then
       NEW.prev ← NULL
       head ← NEW
       Exit
5. Set TEMP ← head
6. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
7. TEMP.next ← NEW
8. NEW.prev ← TEMP
9. Exit


(c) Insertion at Position

Algorithm InsertAtPosition(value, pos):
1. Create NEW node
2. NEW.data ← value
3. If pos = 1 then
       NEW.prev ← NULL
       NEW.next ← head
       If head ≠ NULL then
            head.prev ← NEW
       head ← NEW
       Exit
4. Set TEMP ← head, i ← 1
5. While i < pos-1 and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
6. If TEMP = NULL then
       Print "Invalid Position"
       Exit
7. NEW.next ← TEMP.next
8. NEW.prev ← TEMP
9. If TEMP.next ≠ NULL then
       TEMP.next.prev ← NEW
10. TEMP.next ← NEW
11. Exit


✅ 2. Deletion Algorithms
(a) Deletion from Beginning

Algorithm DeleteFromBeginning():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. TEMP ← head
3. head ← head.next
4. If head ≠ NULL then
       head.prev ← NULL
5. Free TEMP
6. Exit


(b) Deletion from End

Algorithm DeleteFromEnd():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. If head.next = NULL then
       Free head
       head ← NULL
       Exit
3. TEMP ← head
4. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
5. TEMP.prev.next ← NULL
6. Free TEMP
7. Exit


(c) Deletion from Position

Algorithm DeleteFromPosition(pos):
1. If head = NULL then
       Print "List is Empty"
       Exit
2. If pos = 1 then
       TEMP ← head
       head ← head.next
       If head ≠ NULL then
            head.prev ← NULL
       Free TEMP
       Exit
3. TEMP ← head, i ← 1
4. While i < pos and TEMP ≠ NULL do
       TEMP ← TEMP.next
       i ← i + 1
5. If TEMP = NULL then
       Print "Invalid Position"
       Exit
6. TEMP.prev.next ← TEMP.next
7. If TEMP.next ≠ NULL then
       TEMP.next.prev ← TEMP.prev
8. Free TEMP
9. Exit


✅ 3. Traversal Algorithms
(a) Forward Traversal

Algorithm DisplayForward():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. TEMP ← head
3. While TEMP ≠ NULL do
       Print TEMP.data
       TEMP ← TEMP.next
4. Exit


(b) Backward Traversal

Algorithm DisplayBackward():
1. If head = NULL then
       Print "List is Empty"
       Exit
2. TEMP ← head
3. While TEMP.next ≠ NULL do
       TEMP ← TEMP.next
4. While TEMP ≠ NULL do
       Print TEMP.data
       TEMP ← TEMP.prev
5. Exit

`
    },
    {
      id: 11,
      question: "11. Explain Circular Linked List",
      answer: "",
      codeExample: `
🔹 Circular Linked List (CLL)

A Circular Linked List is a type of linked list in which:
    The last node points back to the first node, instead of pointing to NULL.
    It can be singly circular (each node points only forward) or doubly circular 
    (each node points forward and backward, and last node connects to first).

✅ Key Characteristics

    No NULL at the end (continuous loop).
    You can traverse infinitely if not careful.
    Starting point can be any node, and you can reach all others.
    Useful for circular tasks (like round-robin scheduling).


✅ Advantages

    Efficient in traversing circular tasks.
    No explicit end → good for applications where looping is natural.
    Can insert at beginning/end in O(1) time (if you maintain a tail pointer).
    

✅ Types

Singly Circular Linked List – Each node points to the next, and the last node points back to the first.

Doubly Circular Linked List – Each node points to both next and previous nodes, and the last node 
connects back to the first node (and vice versa).

✅ Diagram
        Singly Circular Linked List:
            [10] → [20] → [30] → [40] → back to [10]

        Doubly Circular Linked List:
            [10] ⇄ [20] ⇄ [30] ⇄ [40] ⇄ back to [10]

✅ Real-Life Applications

    Round-robin scheduling in operating systems.
    Multiplayer board games (players take turns in a circular fashion).
    Circular buffers (like audio/video streaming).
    Playlist looping in music players.


<--------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------->


✅ Complete Singly Circular Linked List Program (C)
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node *last = NULL;

// Insert at Beginning
void insertBegin(int value) {
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (last == NULL) {
        last = newNode;
        newNode->next = newNode;
    } else {
        newNode->next = last->next;
        last->next = newNode;
    }
}

// Insert at End
void insertEnd(int value) {
    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (last == NULL) {
        last = newNode;
        newNode->next = newNode;
    } else {
        newNode->next = last->next;
        last->next = newNode;
        last = newNode;
    }
}

// Insert at Position
void insertPos(int value, int pos) {
    if (pos == 1) {
        insertBegin(value);
        return;
    }

    struct Node *temp = last->next;
    for (int i = 1; i < pos - 1; i++)
        temp = temp->next;

    struct Node *newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = temp->next;
    temp->next = newNode;

    if (temp == last)
        last = newNode;
}

// Delete at Beginning
void deleteBegin() {
    if (last == NULL) return;

    struct Node *temp = last->next;

    if (temp == last) {
        free(temp);
        last = NULL;
    } else {
        last->next = temp->next;
        free(temp);
    }
}

// Delete at End
void deleteEnd() {
    if (last == NULL) return;

    struct Node *temp = last->next;

    if (temp == last) {
        free(last);
        last = NULL;
        return;
    }

    while (temp->next != last)
        temp = temp->next;

    temp->next = last->next;
    free(last);
    last = temp;
}

// Delete at Position
void deletePos(int pos) {
    if (pos == 1) {
        deleteBegin();
        return;
    }

    struct Node *temp = last->next;
    struct Node *prev;

    for (int i = 1; i < pos; i++) {
        prev = temp;
        temp = temp->next;
    }

    prev->next = temp->next;

    if (temp == last)
        last = prev;

    free(temp);
}

// Display
void display() {
    if (last == NULL) {
        printf("List is empty\n");
        return;
    }

    struct Node *temp = last->next;
    do {
        printf("%d ", temp->data);
        temp = temp->next;
    } while (temp != last->next);
    printf("\\n");
}

int main() {
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);

    insertBegin(5);
    insertPos(15, 3);

    printf("List after insertions: ");
    display();

    deleteBegin();
    deleteEnd();
    deletePos(2);

    printf("List after deletions: ");
    display();

    return 0;
}

✅ Output
List after insertions: 5 10 15 20 30
List after deletions: 10 20



<--------------------------------------------------------------------------------->
<--------------------------------------------------------------------------------->

✅ Full Example: Circular Linked List in C

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node* next;
};

struct Node* head = NULL;

// Insert at Beginning
void insertBeginning(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (head == NULL) {
        head = newNode;
        newNode->next = head; // points to itself
    } else {
        struct Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
        head = newNode;
    }
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (head == NULL) {
        head = newNode;
        newNode->next = head;
    } else {
        struct Node* temp = head;
        while (temp->next != head) {
            temp = temp->next;
        }
        temp->next = newNode;
        newNode->next = head;
    }
}

// Insert at Position
void insertAtPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        insertBeginning(value);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp->next != head; i++) {
        temp = temp->next;
    }
    newNode->next = temp->next;
    temp->next = newNode;
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) return;

    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* temp = head;
        struct Node* last = head;
        while (last->next != head) {
            last = last->next;
        }
        head = head->next;
        last->next = head;
        free(temp);
    }
}

// Delete from End
void deleteEnd() {
    if (head == NULL) return;

    if (head->next == head) {
        free(head);
        head = NULL;
    } else {
        struct Node* temp = head;
        struct Node* prev = NULL;

        while (temp->next != head) {
            prev = temp;
            temp = temp->next;
        }
        prev->next = head;
        free(temp);
    }
}

// Delete from Position
void deleteAtPosition(int pos) {
    if (head == NULL) return;

    if (pos == 1) {
        deleteBeginning();
        return;
    }

    struct Node* temp = head;
    struct Node* prev = NULL;

    for (int i = 1; i < pos && temp->next != head; i++) {
        prev = temp;
        temp = temp->next;
    }

    prev->next = temp->next;
    free(temp);
}

// Display Circular Linked List
void display() {
    if (head == NULL) {
        printf("List is empty\\n");
        return;
    }
    struct Node* temp = head;
    do {
        printf("%d → ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(back to head)\\n");
}

// Main Function
int main() {
    insertEnd(10);
    insertEnd(20);
    insertEnd(30);
    display(); // 10 → 20 → 30 → (back to head)

    insertBeginning(5);
    display(); // 5 → 10 → 20 → 30 → (back to head)

    insertAtPosition(15, 3);
    display(); // 5 → 10 → 15 → 20 → 30 → (back to head)

    deleteBeginning();
    display(); // 10 → 15 → 20 → 30 → (back to head)

    deleteEnd();
    display(); // 10 → 15 → 20 → (back to head)

    deleteAtPosition(2);
    display(); // 10 → 20 → (back to head)

    return 0;
}



✅ Output Example


10 → 20 → 30 → (back to head)
5 → 10 → 20 → 30 → (back to head)
5 → 10 → 15 → 20 → 30 → (back to head)
10 → 15 → 20 → 30 → (back to head)
10 → 15 → 20 → (back to head)
10 → 20 → (back to head)


---------------------------------------------------------------------------------
---------------------------------------------------------------------------------

✅ Algorithms for Singly Circular Linked List

1. Insertion at Beginning

Algorithm Insert_Beginning(value):
1. Create a new node (newNode) with given value.
2. If head = NULL:
       head = newNode
       newNode->next = head   // points to itself
   Else:
       temp = head
       While temp->next != head:
            temp = temp->next
       temp->next = newNode
       newNode->next = head
       head = newNode

2. Insertion at End

Algorithm Insert_End(value):
1. Create a new node (newNode) with given value.
2. If head = NULL:
       head = newNode
       newNode->next = head
   Else:
       temp = head
       While temp->next != head:
            temp = temp->next
       temp->next = newNode
       newNode->next = head



3. Insertion at Position

Algorithm Insert_Position(value, pos):
1. Create a new node (newNode) with given value.
2. If pos = 1:
       Call Insert_Beginning(value)
3. Else:
       temp = head
       Repeat (pos - 2) times:
            temp = temp->next
            (stop if temp->next == head)
       newNode->next = temp->next
       temp->next = newNode


4. Deletion from Beginning

Algorithm Delete_Beginning():
1. If head = NULL:
       Print "List is empty"
       return
2. If head->next = head:
       Free(head)
       head = NULL
3. Else:
       temp = head
       last = head
       While last->next != head:
            last = last->next
       head = head->next
       last->next = head
       Free(temp)


5. Deletion from End

Algorithm Delete_End():
1. If head = NULL:
       Print "List is empty"
       return
2. If head->next = head:
       Free(head)
       head = NULL
3. Else:
       temp = head
       prev = NULL
       While temp->next != head:
            prev = temp
            temp = temp->next
       prev->next = head
       Free(temp)


6. Deletion from Position

Algorithm Delete_Position(pos):
1. If head = NULL:
       Print "List is empty"
       return
2. If pos = 1:
       Call Delete_Beginning()
3. Else:
       temp = head
       prev = NULL
       Repeat (pos - 1) times:
            prev = temp
            temp = temp->next
            (stop if temp->next == head)
       prev->next = temp->next
       Free(temp)


7. Traversal (Display)

Algorithm Display():
1. If head = NULL:
       Print "List is empty"
       return
2. temp = head
3. Do:
       Print temp->data
       temp = temp->next
   While temp != head
4. Print " (back to head)"



`
    },
    {
      id: 12,
      question: "12. Explain Tree or what is tree (concept and terminologies of tree)",
      answer: "",
      codeExample: `
🌲 What is a Tree?

A Tree is a non-linear data structure that stores data in a hierarchical (top-down) form.
It looks like an upside-down tree with one root and many branches.



🔹 Example:

          A          ← Root
         / \\
        B   C        ← Children
       / \\   \\
      D   E   F      ← Leaf Nodes


Here:
    A is the root node 
    B and C are children of A
    D, E, F are leaf nodes (no children)


🔹 Basic Terms in Tree
| Term      | Meaning                                 |
| ----------| --------------------------------------- |
| Root      | The topmost node (starting point)       |
| Parent    | A node that has child nodes             |
| Child     | A node that descends from another node  |
| Leaf Node | Node with no children                   |
| Edge      | Connection between two nodes            |
| Path      | Sequence of nodes connected by edges    |
| Level     | Distance from the root (root = level 0) |
| Height    | Longest path from root to any leaf      |
| Degree    | Number of children a node has           |



🔹 Types of Trees

1. General Tree → Any number of children.                                       ------ 
2. Binary Tree → Each node has at most two children (Left and Right).           ------
3. Binary Search Tree (BST) → Left child < Root < Right child.                  ------
4. Full Binary Tree → Every node has 0 or 2 children.                           
5. Complete Binary Tree → All levels are filled except possibly the last.       ------
6. AVL Tree → Balanced Binary Search Tree (difference of heights ≤ 1).         
7. B-Tree / B+ Tree → Used in databases and file systems.                       



🔹 Advantages of Tree

✅ Reflects hierarchical structure (like family tree, file system).
✅ Faster search than linked lists (especially in Binary Search Trees).
✅ Used in decision-making, indexing, and expression evaluation.

🔹 Real-Life Examples

Family Tree (Parent–Child relationships)
Computer File System (Folders and subfolders)
Organization Chart (CEO → Manager → Employee)
Decision Trees (used in AI and ML)



🔹 Tree Traversals

To access all nodes, we use traversal methods:

1. Inorder (Left, Root, Right)
    Output nodes in sorted order for BST.

2. Preorder (Root, Left, Right)
    Used to create a copy of the tree.

3. Postorder (Left, Right, Root)
    Used to delete the tree safely.

🔹 Example (Binary Tree Traversal)

      A
     / \\
    B   C
   / \\
  D   E


| Traversal Type | Order of Visiting Nodes |
| -------------- | ----------------------- |
| Inorder        | D, B, E, A, C           |
| Preorder       | A, B, D, E, C           |
| Postorder      | D, E, B, C, A           |


✅ In short:

    A Tree is a hierarchical data structure with nodes connected by edges.
    It starts from a root node and branches out to child nodes — just like a real tree.

`
    },
    {
      id: 12.1,
      question: "12.1 Explain General Tree",
      answer: "",
      codeExample: `
🌳 Definition:

A General Tree is a non-linear data structure in which each node can have any number of children (not limited to 2 like a Binary Tree).

Each node contains:

    Data (value)
    Links to its child nodes

There is one special node called the root node, and all other nodes are connected below it.

🧩 Structure of a General Tree:

           A
        /  |  \\
       B   C   D
          / \\
         E   F

Explanation:

Node A is the root node.
A has 3 children → B, C, D.
Node C has 2 children → E, F.
B, D, E, and F are leaf nodes (no children).


🏗 Basic Terms:
| Term      | Description                                             |
| ----------| ------------------------------------------------------- |
| Root      | The topmost node of the tree (like A).                  |
| Parent    | A node that has child nodes (like C is parent of E, F). |
| Child     | Nodes that are descendants of a parent node.            |
| Leaf Node | Node with no children (like B, D, E, F).                |
| Siblings  | Nodes having the same parent (like E and F).            |
| Level     | Distance of a node from the root (Root = level 0).      |


⚙️ Algorithm (General Idea to Create a General Tree):

There is no single simple array-based representation like binary trees.
Usually, general trees are represented using the Child-Sibling Representation.

📘 Child-Sibling Representation:

Each node has two pointers:

    firstChild → points to its first child.
    nextSibling → points to its next sibling.

Example in structure form:

struct Node {
    char data;
    struct Node* firstChild;
    struct Node* nextSibling;
};



✅ Advantages of General Tree:

More flexible than binary trees.
Represents hierarchical structures like organization charts, file systems, etc.
Useful when nodes can have varying numbers of children.

💡 Real-life Examples:
| Example            | Explanation                                    |
| -------------------| ---------------------------------------------- |
| File system        | A folder can contain many files or subfolders. |
| Organization chart | A manager can have multiple subordinates.      |
| HTML Document      | Each tag can have multiple nested tags.        |


`
    },
    {
      id: 12.2,
      question: "12.2 Explain Binary Tree",
      answer: "",
      codeExample: `
🌳 Definition:

A Binary Tree is a type of tree data structure in which each node can have at most two children —
usually referred to as the left child and the right child.

🧠 Structure of a Binary Tree:

        A
       / \\
      B   C
     / \\
    D   E


Explanation:

    A → Root node
    B and C → Children of A
    D and E → Children of B
    Nodes C, D, and E are leaf nodes (no children).
    

⚙️ Basic Terms:    
| Term      | Description                                               |
| ----------| --------------------------------------------------------- |
| Root      | The topmost node (A).                                     |
| Parent    | A node that has child nodes (like B).                     |
| Child     | A node below a parent node (like D, E are children of B). |
| Leaf Node | Node with no children (like D, E, C).                     |
| Subtree   | Any node and all its descendants.                         |
| Level     | Distance from the root (Root = Level 0).                  |
| Height    | Number of edges in the longest path from root to a leaf.  |



🏗 Structure in C:

struct Node {
    int data;
    struct Node* left;
    struct Node* right;
};


Each node contains:
data → stores the value
left → pointer to the left child
right → pointer to the right child



🧩 Types of Binary Trees:

| Type                     | Description                                                                         |
| -------------------------| ----------------------------------------------------------------------------------- |
| Full Binary Tree         | Every node has 0 or 2 children.                                                     |
| Complete Binary Tree     | All levels are filled except possibly the last, which is filled from left to right. |
| Perfect Binary Tree      | All internal nodes have 2 children, and all leaf nodes are at the same level.       |
| Skewed Binary Tree       | All nodes have only one child (either left or right).                               |
| Binary Search Tree (BST) | Left < Root < Right (special binary tree used for searching).                       |


🔄 Tree Traversals (Ways to Visit All Nodes):
| Traversal Type | Order               | Example Output |
| -------------- | ------------------- | -------------- |
| Inorder        | Left → Root → Right | D, B, E, A, C  |
| Preorder       | Root → Left → Right | A, B, D, E, C  |
| Postorder      | Left → Right → Root | D, E, B, C, A  |


💡 Real-Life Examples:
| Example             | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| Decision Tree       | Used in AI and machine learning for decision-making.         |
| File System         | Directory structure with subfolders (binary-like hierarchy). |
| Expression Tree     | Used in compilers to evaluate mathematical expressions.      |


⚡ Advantages:

Faster searching and sorting (especially in BST).
Useful for hierarchical data representation.
Easy to implement recursive algorithms.

`
    },
    {
      id: 1221,
      question: "12.2.1 Explain Complete Binary Tree ",
      answer: "",
      codeExample: `
🌳 Definition:

A Complete Binary Tree is a type of binary tree in which all levels are completely filled,
except possibly the last level, which is filled from left to right.

👉 In simple words:

Every level is full.
The last level may not be full, but all its nodes appear as left as possible.


🧠 Example 1: Complete Binary Tree
        1
       / \\
      2   3
     / \\  /
    4  5 6


✅ Why it’s Complete:

    Levels 1 and 2 are completely filled.
    Level 3 has 3 nodes (4, 5, 6), all placed from left to right.



❌ Example 2: Not Complete

        1
       / \\
      2   3
       \\   \\
        5   6

❌ Why not complete:

The leftmost position at the last level (under 2) is empty,
but a node exists to the right, which breaks the rule.


⚡ Advantages:

Efficient memory usage — no large gaps in nodes.
Ideal for heap structures (used in Priority Queues).
Easy to store in arrays because of its predictable structure.



🧮 Array Representation Example:

You can store a Complete Binary Tree in an array like this:

Index:  0  1  2  3  4  5
Value: [1, 2, 3, 4, 5, 6]


For any node at index i:

    Left child = 2i + 1
    Right child = 2i + 2
    Parent = (i - 1) / 2

      `
    },
    {
      id: 1222,
      question: "12.2.2 Explain Binary Search Tree",
      answer: "",
      codeExample: `
🌳 Definition:

A Binary Search Tree (BST) is a special type of Binary Tree where:

    Each node contains a unique value.
    The left subtree of a node contains values smaller than the node’s value.
    The right subtree of a node contains values greater than the node’s value.
    Both left and right subtrees must also be Binary Search Trees.

🧠 Example of a BST

        50
       /  \\
     30    70
    / \\    / \\
   20 40  60 80


✅ Why this is a BST:

Left child < Parent (30 < 50)
Right child > Parent (70 > 50)
And this rule applies to every subtree.



❌ Not a BST Example
        50
       /  \\
     70    30


❌ Here, 70 is in the left subtree but greater than 50 → violates BST rule.


⚙️ Properties of BST
| Property                 | Description                        |
| -------------------------| ---------------------------------- |
| Left < Root < Right      | Key rule of BST                    |
| Inorder Traversal        | Always gives sorted order          |
| Search Efficiency        | Average time complexity = O(log n) |
| Worst Case (Skewed Tree) | Time complexity = O(n)             |



💡 Real-Life Examples:
| Example                 | Description                           |
| ------------------------| ------------------------------------- |
| Phonebook               | Searching names in alphabetical order |
| Database Indexing       | Faster searching, insertion, deletion |
| Auto-suggestion systems | Searching words based on order        |



🧩 C Structure of BST
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

// Function to create a new node
struct Node* newNode(int value) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}



⚙️ Algorithms of BST

1️⃣ Insertion
Algorithm Insert(root, value)
1. If root is NULL → create a new node and return it.
2. If value < root->data → Insert in left subtree.
3. Else if value > root->data → Insert in right subtree.
4. Return root.


2️⃣ Searching
Algorithm Search(root, value)
1. If root is NULL → return "Not Found".
2. If value == root->data → return "Found".
3. If value < root->data → search in left subtree.
4. Else → search in right subtree.


3️⃣ Deletion
Algorithm Delete(root, value)
1. Search for the node to delete.
2. Case 1: Node has no children → delete it.
3. Case 2: Node has one child → replace with child.
4. Case 3: Node has two children → find inorder successor (smallest in right subtree), replace node’s value, then delete successor.


4️⃣ Traversals
| Type      | Order               | Output for Example Tree    |
| ----------| ------------------- | -------------------------- |
| Inorder   | Left → Root → Right | 20, 30, 40, 50, 60, 70, 80 |
| Preorder  | Root → Left → Right | 50, 30, 20, 40, 70, 60, 80 |
| Postorder | Left → Right → Root | 20, 40, 30, 60, 80, 70, 50 |



✅ Complete Example: BST Implementation in C
#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

struct Node* newNode(int value) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

// Insert
struct Node* insert(struct Node* root, int value) {
    if (root == NULL)
        return newNode(value);
    if (value < root->data)
        root->left = insert(root->left, value);
    else if (value > root->data)
        root->right = insert(root->right, value);
    return root;
}

// Inorder Traversal
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

// Search
struct Node* search(struct Node* root, int value) {
    if (root == NULL || root->data == value)
        return root;
    if (value < root->data)
        return search(root->left, value);
    return search(root->right, value);
}

int main() {
    struct Node* root = NULL;
    root = insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);

    printf("Inorder traversal (Sorted order): ");
    inorder(root);

    int key = 60;
    if (search(root, key))
        printf("\\n%d found in the BST\\n", key);
    else
        printf("\\n%d not found in the BST\\n", key);

    return 0;
}

⚡ Output:
Inorder traversal (Sorted order): 20 30 40 50 60 70 80
60 found in the BST

      `
    },
    {
      id: 1223,
      question: "12.2.3  Explain Full Binary Tree.",
      answer: "",
      codeExample: `
🌳 Definition:

A Full Binary Tree (also called a Proper or Strict Binary Tree) is a binary tree in which every node has either:

0 children (leaf node) or
2 children (internal node)

👉 No node in a full binary tree has only one child.


🧠 Example of a Full Binary Tree
        1
       / \\
      2   3
     / \\ / \\
    4  5 6  7


✅ Why it’s full:

    Node 1 has two children (2, 3)
    Node 2 has two children (4, 5)
    Node 3 has two children (6, 7)
    Nodes 4, 5, 6, 7 have no children (leaf nodes)

Hence, all nodes have either 0 or 2 children.


❌ Not a Full Binary Tree Example
        1
       / \\
      2   3
       \\
        4


❌ Node 2 has only one child (4) → breaks the full binary tree rule.

⚙️ Properties of a Full Binary Tree
| Property                  | Description                                      |
| --------------------------| ------------------------------------------------ |
| Each node                 | Has either 0 or 2 children                       |
| Number of leaf nodes (L)  | L = I + 1 (where I = number of internal nodes) |
| Total nodes (N)           | N = 2 * I + 1                                  |
| Height (h)                | h = log₂(L) (approx.)                          |
| Maximum nodes at height h | 2^(h+1) - 1                                    |



🧮 Example Calculation

If a full binary tree has 7 nodes,
then number of internal nodes = 3,
and number of leaf nodes = 4.
✅ Because: L = I + 1 → 4 = 3 + 1.



🧩 C Representation of Full Binary Tree

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
};

// Function to create a new node
struct Node* newNode(int value) {
    struct Node* temp = (struct Node*)malloc(sizeof(struct Node));
    temp->data = value;
    temp->left = temp->right = NULL;
    return temp;
}

// Preorder traversal
void preorder(struct Node* root) {
    if (root != NULL) {
        printf("%d ", root->data);
        preorder(root->left);
        preorder(root->right);
    }
}

int main() {
    // Create Full Binary Tree
    struct Node* root = newNode(1);
    root->left = newNode(2);
    root->right = newNode(3);
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->right->left = newNode(6);
    root->right->right = newNode(7);

    printf("Preorder traversal of Full Binary Tree: ");
    preorder(root);
    return 0;
}


⚡ Output:
Preorder traversal of Full Binary Tree: 1 2 4 5 3 6 7



💡 Real-Life Examples of Full Binary Trees
| Example                     | Description                                                                     |
| ----------------------------| ------------------------------------------------------------------------------- |
| Tournament Bracket          | Every match has exactly 2 players (2 children) until one winner (root) remains. |
| Decision Tree (Yes/No type) | Each question splits into exactly two possible answers.                         |
| Expression Tree             | Every operator has exactly two operands.                                        |


✅ Advantages

    Efficient structure for recursion and binary operations.
    Easy to store in arrays.
    Reduces unnecessary memory usage.
      `
    },
    {
      id: 12.3,
      question: "12.3 Explain AVL Tree",
      answer: "",
      codeExample: `
🌳 Definition:

An AVL Tree is a type of self-balancing Binary Search Tree (BST).
It was invented by Adelson-Velsky and Landis (AVL) — hence the name.

👉 In an AVL Tree, the difference between the heights of the left and right subtrees of any node is at most 1.


🧠 Balance Factor (BF):

For each node:
    Balance Factor (BF) = height(left subtree) - height(right subtree)


✅ The Balance Factor can be:

-1, 0, or +1

❌ If BF < -1 or BF > +1 → The tree is unbalanced and needs to be rotated to restore balance.


🌿 Example of an AVL Tree

        30
       /  \\
     20    40
    /
   10


Balance Factor for each node:

10 → 0
20 → 1
40 → 0
30 → 1

✅ All nodes have BF in {-1, 0, +1} → It’s a balanced AVL Tree.


❌ Example of Unbalanced Tree

      30
     /
    20
   /
  10


Here:
    30 → BF = 2 (too high!)
    So, it’s not balanced → needs rotation.


⚙️ Balancing Using Rotations

There are 4 types of rotations used to fix unbalanced AVL trees:

| Case             | Condition                                 | Rotation Used         |
| -----------------| ----------------------------------------- | ----------------------|
| LL (Left-Left)   | Insertion in left subtree of left child   | Right Rotation        |
| RR (Right-Right) | Insertion in right subtree of right child | Left Rotation         |
| LR (Left-Right)  | Insertion in right subtree of left child  | Left + Right Rotation |
| RL (Right-Left)  | Insertion in left subtree of right child  | Right + Left Rotation |



🔁 1. LL Rotation (Right Rotation)

Unbalanced:
        30
       /
      20
     /
    10

After Right Rotation:
        20
       /  \\
     10    30



🔁 2. RR Rotation (Left Rotation)

Unbalanced:
      10
        \\
         20
           \\
            30

After Left Rotation:
        20
       /  \\
     10    30



🔁 3. LR Rotation (Left-Right Rotation)

Unbalanced:
        30
       /
      10
        \\
         20

After LR Rotation:
        20
       /  \\
     10    30



🔁 4. RL Rotation (Right-Left Rotation)

Unbalanced:
      10
        \\
         30
        /
      20

After RL Rotation:
        20
       /  \\
     10    30



🧩 C Structure of AVL Tree

#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;
    struct Node *left, *right;
    int height;
};

// Function to get height of tree
int height(struct Node *N) {
    if (N == NULL)
        return 0;
    return N->height;
}

// Create a new node
struct Node* newNode(int value) {
    struct Node* node = (struct Node*)malloc(sizeof(struct Node));
    node->data = value;
    node->left = node->right = NULL;
    node->height = 1;
    return node;
}

// Get balance factor
int getBalance(struct Node *N) {
    if (N == NULL)
        return 0;
    return height(N->left) - height(N->right);
}

// Right rotation
struct Node* rightRotate(struct Node *y) {
    struct Node *x = y->left;
    struct Node *T2 = x->right;

    x->right = y;
    y->left = T2;

    y->height = 1 + (height(y->left) > height(y->right) ? height(y->left) : height(y->right));
    x->height = 1 + (height(x->left) > height(x->right) ? height(x->left) : height(x->right));

    return x;
}

// Left rotation
struct Node* leftRotate(struct Node *x) {
    struct Node *y = x->right;
    struct Node *T2 = y->left;

    y->left = x;
    x->right = T2;

    x->height = 1 + (height(x->left) > height(x->right) ? height(x->left) : height(x->right));
    y->height = 1 + (height(y->left) > height(y->right) ? height(y->left) : height(y->right));

    return y;
}

// Insert node
struct Node* insert(struct Node* node, int key) {
    if (node == NULL)
        return newNode(key);

    if (key < node->data)
        node->left = insert(node->left, key);
    else if (key > node->data)
        node->right = insert(node->right, key);
    else
        return node;

    node->height = 1 + (height(node->left) > height(node->right) ? height(node->left) : height(node->right));

    int balance = getBalance(node);

    // LL Case
    if (balance > 1 && key < node->left->data)
        return rightRotate(node);

    // RR Case
    if (balance < -1 && key > node->right->data)
        return leftRotate(node);

    // LR Case
    if (balance > 1 && key > node->left->data) {
        node->left = leftRotate(node->left);
        return rightRotate(node);
    }

    // RL Case
    if (balance < -1 && key < node->right->data) {
        node->right = rightRotate(node->right);
        return leftRotate(node);
    }

    return node;
}

// Inorder Traversal
void inorder(struct Node* root) {
    if (root != NULL) {
        inorder(root->left);
        printf("%d ", root->data);
        inorder(root->right);
    }
}

int main() {
    struct Node *root = NULL;

    root = insert(root, 30);
    root = insert(root, 20);
    root = insert(root, 40);
    root = insert(root, 10);
    root = insert(root, 25);
    root = insert(root, 50);

    printf("Inorder traversal of AVL Tree: ");
    inorder(root);
    return 0;
}


⚡ Output:
Inorder traversal of AVL Tree: 10 20 25 30 40 50



✅ Advantages of AVL Tree:

| Advantage          | Explanation                                       |
| -------------------| ------------------------------------------------- |
| Self-balancing     | Prevents tree from becoming skewed                |
| Faster searching   | O(log n) time complexity                          |
| Better performance | Insertion, deletion, and search are all efficient |
| Used in databases  | For indexing and searching operations             |


❌ Disadvantages:

| Disadvantage                  | Explanation                            |
| ----------------------------- | -------------------------------------- |
| More complex                  | Requires rotations and height tracking |
| Slower insertion/deletion     | Because of rebalancing steps           |



💡 Real-Life Applications:

    Databases for maintaining sorted data
    Memory management systems
    File indexing systems
    Search engines (to store sorted words or URLs)

`
    },
    {
      id: 12.4,
      question: "12.4 Explain B-Tree / B+ Tree",
      answer: "",
      codeExample: `
🌳 1. B-Tree (Balanced Tree)
Definition:

A B-Tree is a self-balancing search tree where each node can have multiple keys and children.
It keeps data sorted and allows search, insertion, and deletion operations in logarithmic time.

Properties of B-Tree:

    1. All leaves are at the same level.
    2. Each node contains multiple keys.
    3. A node with n keys has (n + 1) children.
    4. The keys inside a node are sorted in ascending order.
    5. All data is stored in every node (internal + leaf nodes).
    6. The tree grows and shrinks from the root, keeping it balanced.

Example Structure:

             [30]
           /     \\
       [10,20]   [40,50,60]


Root has one key → 30
Left child has keys → 10, 20
Right child has keys → 40, 50, 60


Operations:

    Search: Similar to binary search but across multiple keys per node.
    Insertion: Add the key in sorted order; if a node overflows, split it.
    Deletion: Remove the key; if underflow occurs, merge or redistribute nodes.


Applications:

Database indexing
File system storage
Multilevel memory indexing (e.g., SSD, HDD)



🌳 2. B+ Tree
Definition:

A B+ Tree is an extension of the B-Tree, optimized for range queries and database indexing.
It stores all actual data only in leaf nodes, while internal nodes store only keys for navigation.


Properties of B+ Tree:

    1. All leaf nodes are linked sequentially (like a linked list).
    2. Internal nodes don’t store actual data — only keys.
    3. Searching is faster because leaf nodes form a continuous sequence.
    4. Ideal for range-based searching (e.g., finding records between 10 and 50).



Example Structure:
             [30, 60]
           /     |     \\
       [10,20] [40,50] [70,80]

Leaf nodes linked:  [10,20] → [40,50] → [70,80]



Difference Between B-Tree and B+ Tree:
| Aspect          | B-Tree                                 | B+ Tree                               |
| ----------------|--------------------------------------- | ----------------------------------------- |
| Data storage    | Data stored in internal and leaf nodes | Data stored only in leaf nodes            |
| Search speed    | Slower (more disk accesses)            | Faster (less disk access)                 |
| Leaf connection | Not linked                             | All leaf nodes are linked                 |
| Traversal       | Needs full tree traversal              | Sequential traversal possible             |
| Use case        | General indexing                       | Database and file systems (range queries) |


Applications of B+ Tree:

    Used in database indexing (MySQL, Oracle)
    File systems (NTFS, ReFS, EXT4)
    Search engines for quick record lookup


✅ In Simple Words:

B-Tree = Fast for single searches, stores data everywhere.
B+ Tree = Fast for range searches, stores data only in leaves.

      `
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 8888,
      question: "Mid exam paper questions and answers",
      answer: "",
      codeExample: `
✅ Q1 (a) Short Questions – 1 mark each


i) Define a primitive data structure.

    Primitive data structures are basic data types provided by the programming language.
    Examples: int, float, char, double, boolean.


ii) What is a stack overflow?

    Stack overflow happens when you try to push (add) elements into a stack that is already full.


iii) Give one real-life example of a queue.

    People standing in a line at a ticket counter
    Vehicles in a toll booth line


--------------------


✅ Q1 (b) MCQs / True-False / Fill in the blanks

1) A stack follows ____ order.
👉 LIFO (Last In First Out)


2) True or False: A binary tree can have more than two children.
👉 False
(Binary tree = maximum 2 children only.)


3) In a singly linked list, the last node points to:
👉 a) NULL


4) A circular queue helps in problem of a simple queue —
👉 Wastage of space
(Circular queue reuses empty spaces.)


5) A sparse matrix is one in which:
👉 a) Most elements are zeros


6) Which of the following is NOT a linear data structure?
👉 d) Tree


7) If A, B, C, D are inserted in queue & removed one by one → order?
👉 A B C D
(First in → First out)
Correct option: A


-------------------------------------------------------------------------------
      

✅ Q2 (a) 2-Mark Questions

1) Define an array. Explain advantages and disadvantages.
Array:

A collection of similar elements stored at contiguous memory locations.

Example: int arr[5];


Advantages:

Easy to access using index
Fast searching
Continuous memory improves performance

Disadvantages:

Fixed size
Insertion/deletion difficult
Wastage of memory if size unused



2) What is Linked List? Give its types.

A linked list is a dynamic data structure where elements (nodes) are connected using pointers.

Types:

Singly Linked List
Doubly Linked List
Circular Linked List
Circular Doubly Linked List


--------------------


✅ Q2 (b) 3-Mark Questions

1) Differentiate Stack and Queue

| Stack                        | Queue                             |
| ---------------------------- | --------------------------------- |
| Follows LIFO                 | Follows FIFO                      |
| Only top element accessible  | Insert at rear, delete from front |
| push(), pop() operations     | enqueue(), dequeue() operations   |
| Example: Browser back button | Example: Ticket line              |



2) Discuss types of Binary Trees with examples.

1. Full Binary Tree
Every node has 0 or 2 children.

2. Complete Binary Tree
All levels are full except last, filled left to right.

3. Perfect Binary Tree
All internal nodes have two children & all leaves at same level.

4. Skewed Binary Tree
Every node has only left or only right child.

5. Balanced Binary Tree
Difference between left & right subtree height ≤ 1.


-------------------------------------------------------------------------------


✅ Q3 (Attempt Any TWO)

Q3(i) Operations on Stack + Algorithms

Operations:

push()
pop()
peek()
isEmpty()
isFull()



Algorithm: PUSH(x)

if top == MAX-1
    print "Overflow"
else
    top = top + 1
    stack[top] = x



Algorithm: POP

if top == -1
    print "Underflow"
else
    x = stack[top]
    top = top - 1
    return x


Q3(ii) Static vs Dynamic Memory Allocation

| Static                       | Dynamic                         |
| ---------------------------- | ------------------------------- |
| Memory fixed at compile time | Memory allocated at runtime     |
| Uses array                   | Uses linked list, malloc(), new |
| Fast access                  | Flexible size                   |
| Wastage of memory possible   | No wastage, grows as needed     |
| Used when size known         | Used when size unknown          |



Q3(iii) Draw 4-node Singly Linked List + Insert at End

Initial List (4 nodes)
    [10] -> [20] -> [30] -> [40] -> NULL

Insert 50 at end

Steps:

    Create new node = 50
    Traverse to last node (40)
    Point last node's next to new node
    New node next = NULL

Final List
    [10] -> [20] -> [30] -> [40] -> [50] -> NULL


-------------------------------------------------------------------------------


✅ Q4 – 5 Marks

Q4(a) Find Inorder, Preorder & Postorder order traversal of below Tree:

                A
             /     \\
           B         C
         /   \\     /   \\
        D     F   G     H
      /   \\         \\
     I     J         K


| Traversal Type | Answer                  |
| -------------- | ----------------------- |
| Preorder       | A B D I J F C G K H     |
| Inorder        | I D J B F A G K C H     |
| Postorder      | I J D F B K G H C A     |




(b) Algorithm + Program to Insert Element in Simple Queue (Array Implementation)

ALGORITHM: ENQUEUE (Insert Element)


1. If rear == MAX - 1
      Print "Queue Overflow"
2. Else
      If front == -1
            front ← 0
      rear ← rear + 1
      queue[rear] ← element
3. EndIf



C PROGRAM (Array Implementation of Queue Insert / Enqueue)

#include <stdio.h>

#define MAX 50

int queue[MAX];
int front = -1, rear = -1;

void enqueue(int x) {
    if (rear == MAX - 1) {
        printf("Queue Overflow\\n");
    } else {
        if (front == -1)
            front = 0;  // first element being inserted
        
        rear = rear + 1;
        queue[rear] = x;
        printf("%d inserted into queue\\n", x);
    }
}

int main() {
    enqueue(10);
    enqueue(20);
    enqueue(30);

    return 0;
}



OR 
(b) Sparse Matrix – Representation

Given 5×6 matrix:

0 0 0 0 9 0
0 8 0 0 0 0
4 0 0 2 0 0
0 0 0 0 0 5
0 0 2 0 0 0


Non-zero elements:

| Row | Col | Value |
| --- | --- | ----- |
| 0   | 4   | 9     |
| 1   | 1   | 8     |
| 2   | 0   | 4     |
| 2   | 3   | 2     |
| 3   | 5   | 5     |
| 4   | 2   | 2     |


✔ Triplet Representation:

[5 6 6]     ← rows, columns, non-zero count
[0 4 9]
[1 1 8]
[2 0 4]
[2 3 2]
[3 5 5]
[4 2 2]

`
    },

    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 21,
      question: "21. Define Graph. Explain types of graphs.",
      answer: "",
      codeExample: `
Define Graph

A graph is a non-linear data structure made of:

    Vertices (nodes) → points
    Edges → lines that connect two vertices

A graph is written as:
👉 G = (V, E)

where

    V = set of vertices
    E = set of edges

Example:
If V = {1,2,3} and E = {(1,2), (2,3)}, this means 1 is connected to 2, and 2 is connected to 3.
      

Types of Graphs

1. Undirected Graph

Edges have no direction.
Connection is two-way.

If (A, B) exists → A is connected to B and B is connected to A.

Example:
A — B (both ways)

Diagram

1 --- 2
 \\   /
   3

Explanation
    Edge 1–2 means both 1 connects to 2 and 2 connects to 1.



2. Directed Graph (Digraph)

Edges have direction (→).
Shows one-way connection.

Example:
A → B (only from A to B)

Diagram

1 → 2 → 3
↑       |
|_______|

Explanation
    Arrows tell which direction the connection goes.



3. Weighted Graph

Each edge has a weight/value such as distance, cost, or time.
Edge is written as (u, v, w)
where w = weight.

Example:
A —5→ B (cost = 5)

Diagram

 (5)
1 ----- 2
  \\     |
 (3)\\   |(2)
      \\ |
        3

Explanation
    Weight between 1 and 2 is 5
    Weight between 2 and 3 is 2
    Weight between 1 and 3 is 3



4. Cyclic Graph

A graph that has at least one cycle (a path that starts and ends at the same vertex).

Example cycle:
A → B → C → A

Diagram

A → B → C
↑       ↓
|_______|

Explanation
    A → B → C → A forms a cycle.
      `
    },
    {
      id: 22,
      question: "22.Explain Adjacency Matrix with example.",
      answer: "",
      codeExample: `
Adjacency Matrix (Easy Explanation)

An Adjacency Matrix is a 2D table (matrix) used to represent a graph.

Rows represent vertices
Columns represent vertices
Each cell contains either:
    1 → if there is an edge between vertices
    0 → if there is NO edge
So, it shows which vertex is connected to which.

Example Graph

Let’s take a simple undirected graph:

1 --- 2
|     |
|     |
3 --- 4


Edges:
(1,2), (1,3), (2,4), (3,4)

Adjacency Matrix for this Graph
Vertices = {1, 2, 3, 4}

Matrix:

      1  2  3  4
    -------------
1 |  0  1  1  0
2 |  1  0  0  1
3 |  1  0  0  1
4 |  0  1  1  0


Explanation of Matrix
    Row = starting vertex
    Column = ending vertex

Examples:

Row 1, Column 2 = 1 → means 1 is connected to 2
Row 1, Column 4 = 0 → means 1 is NOT connected to 4
Because the graph is undirected, the matrix is symmetric.


Weighted Graph Example (Bonus)

If the edges have weights:

      (5)
   1 ------ 2
   |        |
 (3)      (2)
   |        |
   3 ------/



Adjacency Matrix:

      1  2  3
    -----------
1 |  0  5  3
2 |  5  0  2
3 |  3  2  0
      
      
      `
    },
    {
      id: 23,
      question: "23. Explain Adjacency List with example.",
      answer: "",
      codeExample: `
Adjacency List (Easy Explanation)

An Adjacency List is another way to represent a graph.
For each vertex, we store a list of all the vertices directly connected (adjacent) to it.
It is usually stored using:
    Array + Linked List
    Array of lists
It saves memory because it only stores the actual connections.

Example Graph

1 --- 2
|     |
|     |
3 --- 4

Edges:
(1,2), (1,3), (2,4), (3,4)


Adjacency List of this Graph
For each vertex, list its neighbors:

1 → 2 → 3
2 → 1 → 4
3 → 1 → 4
4 → 2 → 3

Explanation

Node 1 is connected to 2 and 3 → so list is: 1 → 2 → 3
Node 2 is connected to 1 and 4 → 2 → 1 → 4
Node 3 is connected to 1 and 4 → 3 → 1 → 4
Node 4 is connected to 2 and 3 → 4 → 2 → 3

This is exactly how adjacency list works.



Another Example (Directed Graph)

Graph:

1 → 2 → 3
↑       |
|_______|


Adjacency List:

1 → 2
2 → 3
3 → 1


Because direction matters, we only list outgoing edges.
      
      `
    },
    {
      id: 24,
      question: "24. Write BFS algorithm with example.",
      answer: "",
      codeExample: `
✅ BFS (Breadth-First Search) Algorithm

BFS is a graph traversal method where we visit all neighbors first, then move to the next level.

It uses a Queue (FIFO → First In First Out).

✅ BFS Algorithm (Step-by-step)
BFS(G, start_vertex):

1. Create an empty queue.
2. Mark all vertices as NOT visited.
3. Enqueue the start_vertex into the queue.
4. Mark start_vertex as visited.

5. While queue is NOT empty:
       a. Dequeue a vertex → call it current
       b. Visit (process) current
       c. For each neighbor of current:
             If neighbor is NOT visited:
                 Mark neighbor as visited
                 Enqueue neighbor


Very easy:
👉 Put starting node in queue → visit → add neighbors → continue.

✅ Example Graph
0 --- 1
| \\   |
|  \\  |
3     2


Edges: (0,1), (0,2), (0,3), (1,2)

✅ Step-by-Step BFS from vertex 0

Step 1: Start at 0
Queue: [0]
Visited: {0}


Step 2: Remove 0 → visit neighbors (1,2,3)
Queue: [1, 2, 3]
Visited: {0,1,2,3}


Step 3: Remove 1 → visit neighbors (0,2)
(0 & 2 already visited → ignore)
Queue: [2, 3]


Step 4: Remove 2 → neighbors (0,1)
(both visited)
Queue: [3]


Step 5: Remove 3 → neighbors (0)
(already visited)
Queue: []


⏳ Queue empty → BFS Complete

✅ Final BFS Order
0 → 1 → 2 → 3


✅ ASCII Visualization of BFS Levels

Level 0:      0
             /|\\
            1 2 3

BFS visits like:
0 → (1,2,3) → then no more new nodes


-------------------------


✅ More Difficult Example Graph (ASCII Diagram)

      0
    / | \\
   1  2  3
  / \\ |   \\
 4   5     6
      \\   /
        7

Edges

(0,1), (0,2), (0,3)
(1,4), (1,5)
(2,5)
(3,6)
(5,7)
(6,7)


⭐ We will perform BFS starting from vertex 0

✅ Step-by-Step BFS from vertex 0

Step 1: Start at 0
Queue: [0]
Visited: {0}


Step 2: Remove 0 → visit neighbors (1,2,3)
Queue: [1, 2, 3]
Visited: {0,1,2,3}


Step 3: Remove 1 → visit neighbors (4,5)
(0 already visited, ignore)
Queue: [2, 3, 4, 5]
Visited: {0,1,2,3,4,5}


Step 4: Remove 2 → visit neighbor (5)
(5 already visited from previous step, ignore)
Queue: [3, 4, 5]


Step 5: Remove 3 → visit neighbor (6)
Queue: [4, 5, 6]
Visited: {0,1,2,3,4,5,6}


Step 6: Remove 4 → no new neighbors
(Only neighbor was 1, already visited)
Queue: [5, 6]


Step 7: Remove 5 → visit neighbor (7)
Queue: [6, 7]
Visited: {0,1,2,3,4,5,6,7}


Step 8: Remove 6 → visit neighbor (7)
(7 already visited → ignore)
Queue: [7]


Step 9: Remove 7 → no new neighbors
Queue: []
⏳ Queue empty → BFS complete.


⭐ Final BFS Order
0 → 1 → 2 → 3 → 4 → 5 → 6 → 7


✅ ASCII Visualization of BFS Levels

Level 0:        0
              / | \\
Level 1:     1  2  3
            / \\ |   \\
Level 2:   4    5     6
                   \\ /
Level 3:            7


BFS visits level-wise:

0
→ (1, 2, 3)
→ (4, 5, 6)
→ (7)



So the BFS traversal is:
👉 0 → 1 → 2 → 3 → 4 → 5 → 6 → 7
      
      `
    },
    {
      id: 25,
      question: "25. Write DFS algorithm with example.",
      answer: "",
      codeExample: `
✅ DFS (Depth-First Search) Algorithm

DFS explores a graph by going deep into one path before backtracking.

It uses a Stack (LIFO → Last In First Out) or recursion.

✅ DFS Algorithm (Step-by-step)
DFS(G, start_vertex):

1. Mark all vertices as NOT visited.
2. Push start_vertex onto stack.
3. Mark start_vertex as visited.

4. While stack is NOT empty:
       a. Pop the top element → call it current
       b. Visit (process) current
       c. For each neighbor of current:
             If neighbor is NOT visited:
                 Mark neighbor as visited
                 Push neighbor onto stack


Easy meaning →
👉 Go deep… deep… deep, until no way → then backtrack.

⭐ Example Graph (ASCII Diagram)
0 --- 1
| \\   |
|  \\  |
3     2


Edges:
(0,1), (0,2), (0,3), (1,2)

We will perform DFS starting from 0

✅ Step-by-Step DFS from vertex 0

Step 1: Start at 0
Stack: [0]
Visited: {0}

Pop 0 → visit it.


Step 2: From 0 → push neighbors (1,2,3)
(DFS pushes in order, but visits the last pushed first)
Stack: [1, 2, 3]
Visited: {0,1,2,3}


Step 3: Pop 3
Stack: [1, 2]
    3 has neighbor 0 → already visited
    So nothing new is added.


Step 4: Pop 2
Stack: [1]
Neighbors → (0,1)
Both visited → ignore


Step 5: Pop 1
Stack: []
    Neighbors → (0,2)
    Both visited → nothing to add

⏳ Stack empty → DFS complete


⭐ Final DFS Order
0 → 3 → 2 → 1

Remember:
DFS depends on the order of pushing neighbors, but the idea is:
👉 Go deep first, then backtrack.


⭐ ASCII Visualization of DFS Path

     0
   / | \\
  1  2  3

DFS goes like:
0 → 3 → backtrack → 2 → backtrack → 1


-------------------------


⭐ Difficult DFS Example Graph (ASCII Diagram)
        0
      / | \\
     1  2  3
    / \\ |   \\
   4   5     6
        \\   /
          7

Edges

(0,1), (0,2), (0,3)
(1,4), (1,5)
(2,5)
(3,6)
(5,7)
(6,7)

We perform DFS starting from vertex 0.
We will visit neighbors from left to right for consistency.


⭐ DFS Step-by-Step

Initialize

Stack: [0]
Visited: {0}

Pop 0 → visit it.



Step 1: Visit 0

Neighbors → 1, 2, 3
Push in order → 1, 2, 3
Stack (top at right):
[1, 2, 3]
Visited: {0,1,2,3}


Step 2: Pop 3

Stack: [1, 2]
Visit 3 → neighbor = 6
(0 already visited)

Push 6
Stack: [1, 2, 6]
Visited: {0,1,2,3,6}


Step 3: Pop 6

Stack: [1, 2]
Visit 6 → neighbor = 7
(3 already visited)

Push 7
Stack: [1, 2, 7]
Visited: {0,1,2,3,6,7}


Step 4: Pop 7

Stack: [1, 2]
Visit 7 → neighbor = 5
(6 already visited)

Push 5
Stack: [1, 2, 5]
Visited: {0,1,2,3,5,6,7}


Step 5: Pop 5

Stack: [1, 2]
Visit 5 → neighbors = 1,2,7
(All visited → add nothing)


Step 6: Pop 2

Stack: [1]
Visit 2 → neighbor = 5
(5 already visited)


Step 7: Pop 1

Stack: []
Visit 1 → neighbors = 4,5
Push 4 (5 already visited)

Stack: [4]
Visited: {0,1,2,3,4,5,6,7}


Step 8: Pop 4
Stack: []
Visit 4 → neighbor = 1 (already visited)


⏳ Stack empty → DFS complete.


⭐ Final DFS Order
0 → 3 → 6 → 7 → 5 → 2 → 1 → 4


⭐ DFS Traversal Path ASCII

Start at 0
↓
Go deep through 3 → 6 → 7 → 5
(backtrack)
Then go to 2
(backtrack)
Then go to 1 → 4
(backtrack)
Done


Note:
    like you asked Visited set stores is same in BFS and DFS - Yes
      
      `
    },
    {
      id: 26,
      question: "26. Explain Graph Terminology.",
      answer: "",
      codeExample: `
⭐ 1. Graph

A graph has vertices (nodes) and edges (connections).

A ----- B
 \\     /
   \\ /
    C

Vertices: A, B, C
Edges: (A,B), (B,C), (A,C)


⭐ 2. Vertex (Node)

A vertex is a single point.

   A

A = one vertex


⭐ 3. Edge

An edge connects two vertices.

A ----- B

Edge = (A, B)


⭐ 4. Degree of a Vertex

Degree = number of edges touching the vertex.

    A
   / \\
  B   C
      |
      D

deg(A) = 2
deg(C) = 2
deg(B) = 1
deg(D) = 1


⭐ 5. Path

A path means moving from one vertex to another through edges.

A ---- B ---- C ---- D

Path: A → B → C → D


⭐ 6. Loop

A loop is when an edge connects a vertex to itself.

   A
  / \\
  \\_/

Loop = (A, A)


⭐ 7. Adjacent Nodes (Neighbours)

Nodes that are directly connected.

A ----- B ----- C

A & B are adjacent
B & C are adjacent
A & C are not adjacent


⭐ 8. Undirected Graph

Edges have no direction.

A ----- B
|       |
|       |
C ----- D


⭐ 9. Directed Graph (Digraph)

Edges have arrows (direction).

A → B → C
↑       ↓
|_______|


⭐ 10. Weighted Graph

Edges have numbers (cost, distance, time).

A -5- B
|     |
3     2
|     |
C -4- D


⭐ 11. Cycle

A path that starts and ends at the same vertex.

A → B
↑   ↓
C ← D

Cycle: A → B → D → C → A



⭐ 12. Connected Graph (Very Easy Explanation)

A connected graph means:

👉 You can travel from ANY vertex to ANY other vertex.
There is ALWAYS some path.

Diagram (Connected Graph)

A ----- B ----- C
        |
        D

✔ How to check it's connected?

From A → you can go to B → C → D
From D → you can go to B → A → C
From C → you can go to B → A → D

You can reach any vertex from any other vertex.

👉 That is why this is called a Connected Graph.



⭐ 13. Disconnected Graph (Very Easy Explanation)

A disconnected graph means:

👉 Some vertices cannot reach the others.
The graph is split into different parts.


Diagram (Disconnected Graph)

A ----- B       C ----- D

✔ Why is this disconnected?

Look carefully:

A is connected to B
C is connected to D
BUT ❌ there is NO path between (A,B) part and (C,D) part.

You cannot go from:

A to C
B to D
C to A
D to B

They are in different groups → so the graph is disconnected.
      
      `
    },
    {
      id: 27,
      question: "27. Applications of BFS and DFS.",
      answer: "",
      codeExample: `
⭐ Applications of BFS (with simple diagrams)

Think of BFS as:

👉 Searching level by level (nearest first)


✅ 1. Finding Shortest Path

A -- B -- C -- D


From A to D, BFS checks:

A → B → C → D
(Shortest path)

Easy to remember: BFS = Nearest First = Shortest Path


✅ 2. Web Crawlers (Google Search)

Page A
 |  \\
 B   C
     |
     D


Google starts from Page A → visits all linked pages B, C → then pages linked to them (D).
Easy: BFS = Explore pages level by level


✅ 3. Social Networks (Friends suggestion)

You → Friend → Friend-of-Friend


BFS helps find friends-of-friends.
Easy: BFS = “People you may know”


✅ 4. Network Broadcasting

Server
 /  |  \\
A   B   C


One message → reaches A, B, C at the same time.
Easy: BFS = Spread message quickly




⭐ Applications of DFS (with simple diagrams)

Think of DFS as:

    👉 Going deep first
    👉 Backtracking


✅ 1. Solving a Maze

Start → → ↓
         Dead-end → go back


DFS goes deep into the maze until dead-end → backtracks → finds a path.
Easy: DFS = Maze solving


✅ 2. Detecting Cycles

A → B → C
↑       ↓
└───────┘


DFS can detect this cycle.
Easy: DFS = Finds loops


✅ 3. Topological Sorting (Task order)

A → B → C


A before B, B before C.
DFS helps find order.

Easy: DFS = Scheduling tasks


✅ 4. Finding Connected Components

A—B     C—D


DFS finds:

Component 1: A, B
Component 2: C, D

Easy: DFS = Find groups


⭐ SUPER EASY MEMORY TRICK

BFS = Nearest First

    Shortest path
    Social friends
    Web crawling
    Broadcasting


DFS = Deep First

    Maze solving
    Find cycles
    Task ordering
    Connected components

-------------------------

⭐ What is a Maze? (Super Easy Explanation)

A maze is like a puzzle of paths where you must find a way out.

Think of:

    A garden maze
    A game maze
    A path with many turns
    Some paths go forward
    Some paths are dead-ends (wrong way)

Here is a simple ASCII maze:

Start
  |
  v
+---+---+---+
| S |   |   |
+   +---+   +
|   |   | E |
+---+   +---+


S = Start point
E = Exit point
Boxes = paths
Lines = walls

Some paths go nowhere → dead-ends.


⭐ How DFS works in a maze

DFS does this:

1. Go deep in one direction
2. If stuck (dead-end), come back
3. Try another path
4. Continue until exit found

Example:

Start → → ↓
       (Dead-end) → go back (↑)
Try another direction


This is why DFS is used to solve mazes.


⭐ Super Simple Example Maze

S → A → B → X (dead-end)
        ↑
        |
        C → E (exit)


DFS path:

1. Go S → A → B → X
2. X is dead-end → go back to B
3. Try C
4. C leads to E (exit)

So DFS helps find a path by:

👉 going deep
👉 coming back
👉 trying new paths


⭐ EASY MEMORY TRICK:

DFS = exploring a game maze
Deep → stuck → backtrack → try next way.
      `
    },
    {
      id: 28,
      question: "28. Difference: BFS vs DFS.",
      answer: "",
      codeExample: `
⭐ BFS vs DFS (Easy Difference Table)

| BFS                                                      | DFS                                              |
| ---------------------------------------------------------| -------------------------------------------------|
| Breadth-First Search                                     | Depth-First Search                               |
| Visits level by level                                    | Visits deep path first                           |
| Uses Queue (FIFO)                                        | Uses Stack (LIFO) or Recursion                   |
| Finds shortest path                                      | Does not always find shortest path               |
| Good for nearest-first search                            | Good for exploring whole structure               |
| Used in social networks, web crawling, shortest path     | Used in mazes, cycle detection, topological sort |
| Needs more memory                                        | Needs less memory                                |
| Looks like spreading outward                             | Looks like going deep inside                     |



⭐ Easy Diagram Difference

BFS Diagram (Level by Level)

     0
   / | \\
  1  2  3
 / \\
4   5

BFS: 0 → 1 → 2 → 3 → 4 → 5


👉 Visits all neighbors first
👉 Then next level



DFS Diagram (Deep First)

     0
   / | \\
  1  2  3
 /
4
 \\
  5

DFS: 0 → 1 → 4 → 5 → backtrack → 2 → backtrack → 3


👉 Goes deep: 0 → 1 → 4 → 5
👉 Then backtracks



⭐ Very Simple Real-Life Examples

BFS Real-Life

Finding nearest:

    nearest friend
    nearest hospital
    shortest route

Because BFS thinks like:
👉 “Check all nearby first.”


DFS Real-Life

Solving a maze:

    Go deep inside
    Hit a dead-end
    Come back and try another route

Because DFS thinks like:
👉 “Go deep until stuck, then return.”


⭐ Memory Trick (Very Easy)

BFS = Broad First
DFS = Deep First
      
      `
    },
    {
      id: 29,
      question: "29. Explain Spanning Tree with example.",
      answer: "",
      codeExample: `
⭐ What is a Spanning Tree? (Easy Explanation)

A spanning tree is a sub-graph of an undirected connected graph that:

1. Includes all the vertices
2. Has the minimum number of edges
3. Has no cycles

👉 If a graph has N vertices, a spanning tree always has N − 1 edges.


⭐ Think of it like this:

You have a graph with many roads and loops.
A spanning tree removes extra edges but keeps every place connected.


⭐ Example Graph

Here is a normal graph:

    A
   / \\
  B---C
   \\ /
    D

Edges:
(A,B), (A,C), (B,C), (B,D), (C,D)

👉 This graph has cycles (triangles).


⭐ Spanning Tree of This Graph

A spanning tree removes cycles but keeps all vertices connected.

One possible spanning tree:

    A
   / \\
  B   C
   \\
    D

Edges used:
(A,B), (A,C), (B,D)

👉 Uses 4 vertices and 3 edges (N − 1 = 4 − 1 = 3)
👉 No cycles
👉 All vertices connected


⭐ Another example (even simpler)

Original Graph:

1 ----- 2
| \\     |
|   \\   |
3 ----- 4

Edges:
(1,2), (1,3), (1,4), (3,4), (2,4)


✔ Spanning Tree Example

1 ----- 2
|
3
 \\
  4

Edges used:
(1,2), (1,3), (3,4)

👉 All 4 vertices
👉 Only 3 edges
👉 No cycles → so it is a spanning tree


⭐ Important Points to Remember

A graph can have many different spanning trees
A spanning tree always contains all vertices
No cycles allowed
Edges = (Vertices − 1)


⭐ Very Easy Real-Life Example

Imagine 4 houses connected with many roads.
A spanning tree chooses the minimum roads needed so:

    Every house is still reachable
    No extra loops
    No confusing paths
      
      `
    },
    {
      id: 30,
      question: "30. Explain Minimum Spanning Tree.",
      answer: "",
      codeExample: `
⭐ What is a Minimum Spanning Tree (MST)?

A Minimum Spanning Tree is a special type of Spanning Tree from a weighted graph.

A Minimum Spanning Tree must:

1. Include all vertices
2. Have no cycles
3. Use exactly N − 1 edges
4. Have the minimum total weight

👉 MST = Spanning Tree with lowest total cost

⭐ Example Weighted Graph

     (4)
  A ------ B
  | \\      |
(3)|  \\(2) |(6)
  |   \\    |
  C ------ D
      (5)


Edges:

A–B = 4
A–C = 3
A–D = 2
C–D = 5
B–D = 6


⭐ Goal of MST

Pick edges that:

✔ Connect all vertices
✔ Avoid cycles
✔ Give the minimum weight sum


⭐ Step-by-step (Very Easy)

We choose smallest edges first:

1️⃣ Pick A–D (2)

Smallest weight

2️⃣ Pick A–C (3)

Next smallest

3️⃣ Pick A–B (4)

Next smallest
(Do NOT pick C–D or B–D because they create cycles)


⭐ Minimum Spanning Tree (MST)

     A
   / | \\
 (3)(2)(4)
 /   |   \\
C    D    B


Edges chosen:

A–D = 2
A–C = 3
A–B = 4

Total weight = 2 + 3 + 4 = 9

👉 This is the minimum possible.


⭐ Simple Real-Life Example

Imagine 4 cities want to connect electricity wires.

    Many possible roads
    Some roads cost more
    Some roads cost less

MST finds the cheapest way to connect ALL cities without loops.


⭐ Easy Memory Trick

Spanning Tree = connects all nodes, no cycles
Minimum Spanning Tree = connects all nodes with minimum cost
      
      `
    },
    {
      id: 31,
      question: "31. Linear Search vs Binary Search with algorithm.",
      answer: "",
      codeExample: `
⭐ 1. Linear Search (Easy Explanation)

Linear Search means:
👉 Check elements one by one from start to end

Example

Array:

[5, 8, 2, 9, 1]

Searching for 9:

Check in order:
5 → 8 → 2 → 9 (found)

When to use

✔ Works on unsorted or sorted lists
✔ Very simple
❌ Slow for large data
      

⭐ Algorithm of Linear Search
LinearSearch(A, key):

1. Repeat for i = 0 to n-1:
2.     If A[i] == key:
3.         return i   // key found
4. End Repeat
5. return -1   // key not found



⭐ 2. Binary Search (Easy Explanation)

Binary Search means:
👉 Divide the array into two halves
👉 Check middle
👉 Go LEFT or RIGHT
❗ Works ONLY on sorted arrays

Example (Sorted array)

[2, 4, 6, 8, 10, 12]


Search for 8

Steps:

Middle = 8 → found
(If not found, go left or right)

When to use

✔ Very fast
✔ Best for large sorted arrays
❌ Works only on sorted data

⭐ Algorithm of Binary Search (Iterative)
BinarySearch(A, key):

1. low = 0
2. high = n - 1

3. While low <= high:
4.     mid = (low + high) / 2
5.     
6.     If A[mid] == key:
7.         return mid
8.     Else If key < A[mid]:
9.         high = mid - 1
10.    Else:
11.         low = mid + 1
12. return -1    // key not found

--------------------------

⭐ Diagrams
Linear Search
Array: [3, 8, 1, 9, 5]
Search for 9

3 → 8 → 1 → 9 (Found)

Binary Search

Array must be sorted:

[2, 4, 6, 8, 10, 12]
Search for 10

Step 1: mid = 6
Step 2: key > mid → go right
Step 3: mid = 10 → found

--------------------------

⭐ Difference Table (Very Easy to Remember)

| Linear Search              | Binary Search                  |
| -------------------------- | ------------------------------ |
| Checks elements one by one | Divides list in half each time |
| Works on unsorted list     | Works only on sorted list  |
| Slow for large data        | Very fast                      |
| Time = O(n)                | Time = O(log n)                |
| Simple                     | More efficient                 |



⭐ 1. Linear Search in C
#include <stdio.h>

int main() {
    int n, key, i, found = 0;

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    // Linear Search
    for(i = 0; i < n; i++) {
        if(arr[i] == key) {
            found = 1;
            break;
        }
    }

    if(found)
        printf("Element found at position %d\\n", i + 1);
    else
        printf("Element not found.\\n");

    return 0;
}

⭐ 2. Binary Search in C

⚠️ Remember: Binary Search works only on sorted array.

#include <stdio.h>

int main() {
    int n, key, i, low, high, mid;

    printf("Enter size of sorted array: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d sorted elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter element to search: ");
    scanf("%d", &key);

    low = 0;
    high = n - 1;

    // Binary Search
    while(low <= high) {
        mid = (low + high) / 2;

        if(arr[mid] == key) {
            printf("Element found at position %d\\n", mid + 1);
            return 0;
        }
        else if(key < arr[mid]) {
            high = mid - 1;   // search left part
        }
        else {
            low = mid + 1;    // search right part
        }
    }

    printf("Element not found.\\n");

    return 0;
}




------------------------------------------------------------------


You are asking:

“(0 + 1) / 2 = 0.5 → Why you choose 0? Why not choose 1?”

This is the heart of your confusion.
Let me clear it VERY VERY SIMPLE.

⭐ In C Language:

INTEGER ÷ INTEGER = INTEGER
Decimals are removed (not rounded).

So:

0.5 → decimal part removed → 0

Not rounded to 1.


⭐ IMPORTANT RULE

C does NOT round numbers.
It truncates (cuts the decimal).

So:

| Math Value | C Integer Result |
| ---------- | ---------------- |
| 0.5        | 0                |
| 1.5        | 1                |
| 2.9        | 2                |
| 3.7        | 3                |


It NEVER makes 0.5 → 1.

❗ Why C chooses 0, not 1?

Because:

✔ C does TRUNCATION

Remove decimal → keep only whole number.


❌ C does NOT ROUND

Round 0.5 up → 1 → this is NOT done in C integer division.


⭐ So your example:

(0 + 1) / 2 = 1 / 2 = 0.5
C integer division = 0


You cannot choose 1.
Because C doesn’t round.


🔥 FINAL ONE-LINE ANSWER

C always drops decimals.
It never rounds.
So 0.5 becomes 0, not 1.
      `
    },
    {
      id: 32,
      question: "32. Bubble Sort working with diagram.",
      answer: "",
      codeExample: `
⭐ Bubble Sort (Easy Explanation)

Bubble Sort works like this:

👉 Compare two numbers
👉 If they are in wrong order, swap them
👉 Repeat this again and again
👉 Biggest number “bubbles up” to the end in each round

Just like bubbles move upward in water.


⭐ Example Array

We will sort this array in ascending order:

[5, 1, 4, 2]


⭐ Bubble Sort Working (with diagrams)

We compare adjacent elements in each pass.


⭐ PASS 1

Array:

[5, 1, 4, 2]

Step 1: Compare 5 and 1
5 > 1 → swap

[1, 5, 4, 2]

Step 2: Compare 5 and 4
5 > 4 → swap

[1, 4, 5, 2]

Step 3: Compare 5 and 2
5 > 2 → swap

[1, 4, 2, 5]

➡ Largest element 5 moves to the end


⭐ PASS 2

Now array:

[1, 4, 2, 5]

Step 1: Compare 1 and 4
1 < 4 → NO swap

Step 2: Compare 4 and 2
4 > 2 → swap

[1, 2, 4, 5]

Largest element of this round → 4 is fixed.


⭐ PASS 3
[1, 2, 4, 5]

Step 1: Compare 1 and 2
1 < 2 → NO swap

Now only one element left—sorting is complete.


⭐ FINAL SORTED ARRAY
[1, 2, 4, 5]


⭐ Bubble Sort Diagram (Full)

Initial:      [5, 1, 4, 2]

Pass 1:       [1, 5, 4, 2]
               [1, 4, 5, 2]
               [1, 4, 2, 5]

Pass 2:       [1, 4, 2, 5]
               [1, 2, 4, 5]

Pass 3:       [1, 2, 4, 5]

Final:        [1, 2, 4, 5]



⭐ Easy Memory Trick

Bubble Sort = Compare + Swap + Bubble biggest to end



⭐ Bubble Sort Algorithm (Easy)

BubbleSort(A, n):

1. Repeat for i = 0 to n-2
2.     Repeat for j = 0 to n-i-2
3.         If A[j] > A[j+1]
4.             Swap A[j] and A[j+1]
5. End


Explanation:

Outer loop → number of passes
Inner loop → compares adjacent elements
Swap if element is in wrong order



⭐ Bubble Sort Program in C

#include <stdio.h>

int main() {
    int n, i, j, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Bubble Sort
    for(i = 0; i < n - 1; i++) {
        for(j = 0; j < n - i - 1; j++) {

            if(arr[j] > arr[j + 1]) {
                // Swap
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

        }
    }

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
      
      `
    },
    {
      id: 33,
      question: "33. Selection Sort working.",
      answer: "",
      codeExample: `
⭐ Selection Sort (Easy Explanation)

Selection Sort works like this:

👉 Find the smallest element in the array
👉 Put it in the first position
👉 Then find the next smallest
👉 Put it in the second position
👉 Continue until the entire array is sorted

It is like selecting the smallest number and placing it in order.

⭐ Example Array

We will sort this:

[5, 3, 8, 1, 2]



⭐ Selection Sort Diagram Summary

Initial:     [5, 3, 8, 1, 2]

Pass 1:      [1, 3, 8, 5, 2]

Pass 2:      [1, 2, 8, 5, 3]

Pass 3:      [1, 2, 3, 5, 8]

Pass 4:      [1, 2, 3, 5, 8]

Sorted:      [1, 2, 3, 5, 8]



⭐ Selection Sort Algorithm (Very Easy)

SelectionSort(A, n):

1. Repeat for i = 0 to n-2
2.     minIndex = i
3.     
4.     Repeat for j = i+1 to n-1
5.         If A[j] < A[minIndex]
6.             minIndex = j
7.     
8.     Swap A[i] and A[minIndex]
9. End


✔ Explanation:

Pick position i
Find the smallest element in the remaining array
Swap smallest with A[i]
Continue until the whole array is sorted


⭐ Selection Sort Program in C

#include <stdio.h>

int main() {
    int n, i, j, minIndex, temp;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Selection Sort
    for(i = 0; i < n - 1; i++) {

        minIndex = i;  // Assume current index is minimum

        // Find actual minimum from remaining elements
        for(j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap arr[i] with arr[minIndex]
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
    

------------------------------------------------------


What the variables mean

    n = number of elements (here 5)
    arr[] = your array
    i = current index we want to fill with the correct (minimum) element
    minIndex = index of the smallest element found so far in the unsorted part
    j = index used to scan the unsorted part
    temp = temporary variable used to swap two elements


Initial state
n = 5
arr = [5, 3, 8, 1, 2]


Selection sort runs i from 0 to n-2 (i.e., 0..3). At each i we:

1. assume minIndex = i
2. scan j = i+1 .. 4 to find the actual minimum index
3. swap arr[i] and arr[minIndex] (even if minIndex == i)


---------------------


Iteration i = 0

Start: i = 0
Assume minIndex = 0 → arr[minIndex] = arr[0] = 5

Scan j from 1 to 4:

    j = 1: compare arr[1] = 3 with arr[minIndex] = 5 → 3 < 5 → update minIndex = 1
    j = 2: compare arr[2] = 8 with arr[1] = 3 → 8 < 3 ? No → minIndex remains 1
    j = 3: compare arr[3] = 1 with arr[1] = 3 → 1 < 3 → update minIndex = 3
    j = 4: compare arr[4] = 2 with arr[3] = 1 → 2 < 1 ? No → minIndex remains 3

After scanning, minIndex = 3 (value 1).


Swap arr[0] and arr[3]:

temp = arr[0] = 5
arr[0] = arr[3] = 1
arr[3] = temp = 5


Array becomes:

arr = [1, 3, 8, 5, 2]


---------------------


Iteration i = 1

Start: i = 1
Assume minIndex = 1 → arr[minIndex] = arr[1] = 3


Scan j = 2..4:

    j = 2: compare arr[2] = 8 with arr[1] = 3 → 8 < 3 ? No
    j = 3: compare arr[3] = 5 with arr[1] = 3 → 5 < 3 ? No
    j = 4: compare arr[4] = 2 with arr[1] = 3 → 2 < 3 → update minIndex = 4

After scanning, minIndex = 4 (value 2).


Swap arr[1] and arr[4]:

temp = arr[1] = 3
arr[1] = arr[4] = 2
arr[4] = temp = 3


Array becomes:

arr = [1, 2, 8, 5, 3]


---------------------


Iteration i = 2

Start: i = 2
Assume minIndex = 2 → arr[minIndex] = arr[2] = 8

Scan j = 3..4:

    j = 3: compare arr[3] = 5 with arr[2] = 8 → 5 < 8 → update minIndex = 3
    j = 4: compare arr[4] = 3 with arr[3] = 5 → 3 < 5 → update minIndex = 4

After scanning, minIndex = 4 (value 3).


Swap arr[2] and arr[4]:

temp = arr[2] = 8
arr[2] = arr[4] = 3
arr[4] = temp = 8


Array becomes:

arr = [1, 2, 3, 5, 8]


---------------------


Iteration i = 3

Start: i = 3
Assume minIndex = 3 → arr[minIndex] = arr[3] = 5

Scan j = 4:

    j = 4: compare arr[4] = 8 with arr[3] = 5 → 8 < 5 ? No → minIndex remains 3

After scanning, minIndex = 3. Swap with itself happens (harmless):


Swap arr[3] and arr[3]:

temp = arr[3] = 5
arr[3] = arr[3] = 5
arr[3] = temp = 5


Array remains:

arr = [1, 2, 3, 5, 8]




End

i stops at n-2 = 3. Final sorted array printed by the program:

Sorted array:
1 2 3 5 8


Visual summary of array after each outer iteration

After i = 0 → [1, 3, 8, 5, 2]
After i = 1 → [1, 2, 8, 5, 3]
After i = 2 → [1, 2, 3, 5, 8]
After i = 3 → [1, 2, 3, 5, 8] (no change)


Complexity quick note

Time: O(n²) comparisons in worst/average/best (selection sort always scans remaining elements)
Space: O(1) extra (in-place sort)
      `
    },
    {
      id: 34,
      question: "34. Insertion Sort working.",
      answer: "",
      codeExample: `
⭐ Insertion Sort (Easy Explanation)

Insertion Sort works like this:

👉 You take elements one by one
👉 Insert each element into its correct position in the sorted part
👉 The left side becomes sorted gradually

Think of arranging playing cards in your hand.


⭐ Insertion Sort Algorithm
InsertionSort(A, n):

1. Repeat for i = 1 to n-1
2.     key = A[i]
3.     j = i - 1
4.     
5.     While j >= 0 AND A[j] > key
6.         A[j + 1] = A[j]
7.         j = j - 1
8.     
9.     A[j + 1] = key
10. End



⭐ Insertion Sort Program in C

#include <stdio.h>

int main() {
    int n, i, j, key;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Insertion Sort
    for(i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        // Move elements greater than key
        while(j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}


------------------------------------------------------


✔ Array = [5, 2, 4, 6, 1]

Insertion sort works like this:

Start from index 1
Take that element as key
Shift all bigger elements to the right
Insert key into correct position

Let’s go one pass at a time.

⭐ Initial Array
[5, 2, 4, 6, 1]


✅ i = 1
key = arr[1] = 2
j = 0


Compare:

arr[j] = 5 > key(2)  → shift 5 right


Array after shift:

[5, 5, 4, 6, 1]


j-- → j = -1

Insert key at position j+1 = 0

arr[0] = 2


Array becomes:

[2, 5, 4, 6, 1]



✅ i = 2
key = arr[2] = 4
j = 1


Compare:

arr[1] = 5 > key(4) → shift 5 right


Array:

[2, 5, 5, 6, 1]


j-- → j = 0

Compare:

arr[0] = 2 > 4 ? No → stop


Insert key at j+1 = 1:

arr[1] = 4


Array becomes:

[2, 4, 5, 6, 1]



✅ i = 3
key = 6
j = 2


Compare:

arr[2] = 5 > 6 ? No


No shifts. Insert key at same place.

Array remains:

[2, 4, 5, 6, 1]



✅ i = 4
key = 1
j = 3


Now big shifting happens:

Compare:

arr[3] = 6 > 1 → shift


Array:

[2, 4, 5, 6, 6]


j = 2

Compare:

arr[2] = 5 > 1 → shift


Array:

[2, 4, 5, 5, 6]


j = 1

Compare:

arr[1] = 4 > 1 → shift


Array:

[2, 4, 4, 5, 6]


j = 0

Compare:

arr[0] = 2 > 1 → shift


Array:

[2, 2, 4, 5, 6]

j = -1 → stop
Insert key at j+1 = 0

arr[0] = 1


Array becomes:

[1, 2, 4, 5, 6]


🎉 FINAL SORTED ARRAY
1 2 4 5 6


🌟 Summary of each step:

| i | key | Resulting array |
| - | --- | --------------- |
| 1 | 2   | [2, 5, 4, 6, 1] |
| 2 | 4   | [2, 4, 5, 6, 1] |
| 3 | 6   | [2, 4, 5, 6, 1] |
| 4 | 1   | [1, 2, 4, 5, 6] |

      `
    },
    {
      id: 35,
      question: "35. Quick Sort – Pivot, Partition, Recursion.",
      answer: "",
      codeExample: `
⭐ 1. Quick Sort (Easy Explanation)

Quick Sort is a sorting method that works in 3 main steps:

1. Pivot

Choose one element from the array.
This element is called pivot.
The pivot helps to divide the array.


2. Partition

Move all smaller elements to left of pivot.
Move all larger elements to right of pivot.
After partition, pivot is in correct sorted position.


3. Recursion

Apply Quick Sort again on:
    Left part of pivot
    Right part of pivot
Continue until the whole array is sorted.



------------

⭐ 2. Example (Simple and Clear)

Array:

[8, 4, 7, 3, 9, 1]


Step 1: Choose pivot = 8

Partition result:

    Left side:  elements < 8 → [4, 7, 3, 1]
    Pivot:                         8
    Right side: elements > 8 → [9]


Step 2: Apply Quick Sort on left side:

    [4, 7, 3, 1]
    Pivot = 4


Step 3: Apply Quick Sort again until all parts are sorted.

Final sorted array:

[1, 3, 4, 7, 8, 9]


-------------------------------------------------------------


⭐ Simple Quick Sort Algorithm (matching the short program)

QuickSort(A, low, high):

1. Set i = low
2. Set j = high
3. Set pivot = A[(low + high) / 2]

4. While i <= j:
5.     Move i right until A[i] >= pivot
6.     Move j left until A[j] <= pivot
7.     If i <= j:
8.         Swap A[i] and A[j]
9.         i = i + 1
10.        j = j - 1

11. If low < j:
12.     QuickSort(A, low, j)

13. If i < high:
14.     QuickSort(A, i, high)




⭐ Simple & Short Quick Sort Program in C

#include <stdio.h>

void quickSort(int a[], int low, int high) {
    int i = low, j = high, pivot = a[(low + high) / 2], temp;

    while(i <= j) {
        while(a[i] < pivot) i++;
        while(a[j] > pivot) j--;

        if(i <= j) {
            temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i++;
            j--;
        }
    }

    if(low < j) quickSort(a, low, j);
    if(i < high) quickSort(a, i, high);
}

int main() {
    int n, i;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];

    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    quickSort(a, 0, n - 1);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}


--------------------------------------------------------------
code explaination with detailed steps


✅ Array: [8, 4, 7, 3, 9, 1]

And this time I will clearly show:

i, j, pivot

swaps

final partitions

AND whether these two conditions run or not:

if (low < j)
if (i < high)

⭐ START: quickSort(a, 0, 5)

Array: [8, 4, 7, 3, 9, 1]
low = 0, high = 5

Pivot = a[(0+5)/2] = a[2] = 7
i = 0
j = 5
pivot = 7

🔵 PASS 1 — Partitioning
Move i →
a[i] = 8 < 7 ? NO → stop i=0

Move j ←
a[j] = 1 > 7 ? NO → stop j=5

Swap a[0], a[5] → (8 ↔ 1)

Array becomes:

[1, 4, 7, 3, 9, 8]


Move i, j:

i = 1
j = 4

🔵 PASS 2
Move i →
a[i] = 4 < 7 → i=2
a[i] = 7 < 7 ? NO → stop i=2

Move j ←
a[j] = 9 > 7 → j=3
a[j] = 3 > 7 ? NO → stop j=3

Swap a[2], a[3] → (7 ↔ 3)

Array becomes:

[1, 4, 3, 7, 9, 8]


Move i, j:

i = 3
j = 2

🛑 STOP Partition (i > j)

So partition indices:

Left part: low = 0 → j = 2
Right part: i = 3 → high = 5

⭐ NOW CHECK CONDITIONS
CONDITION 1:
if (low < j)
0 < 2 → TRUE


👉 Call: quickSort(a, 0, 2)

CONDITION 2:
if (i < high)
3 < 5 → TRUE


👉 Call: quickSort(a, 3, 5)

🔥 Now we go inside both recursive calls.
==========================================
✅ LEFT RECURSION: quickSort(a, 0, 2)

Subarray: [1, 4, 3]

Pivot = middle = a[(0+2)/2] = a[1] = 4

i = 0
j = 2
pivot = 4

🔵 PASS 1

Move i →

a[i] = 1 < 4 → i=1
a[i] = 4 < 4 ? NO → stop i=1


Move j ←

a[j] = 3 > 4 ? NO → stop j=2


Swap a[1], a[2] → (4 ↔ 3)

Array:

[1, 3, 4, 7, 9, 8]


Move:

i = 2
j = 1


Stop loop.

✔ LEFT PARTITION RESULTS (0,2):

Left: 0 to j = 1
Right: i = 2 to 2

CONDITION 1:
if (low < j)
0 < 1 → TRUE


👉 Call: quickSort(a, 0, 1)

CONDITION 2:
if (i < high)
2 < 2 → FALSE


❌ No call to quickSort(a, 2, 2)

==========================================
✅ LEFT-LEFT RECURSION: quickSort(a, 0, 1)

Subarray: [1, 3]

Pivot = a[ (0+1)/2 ] = a[0] = 1

i = 0
j = 1
pivot = 1

Move i
a[i] = 1 < 1 ? NO → stop

Move j
a[j] = 3 > 1 → j=0
a[j] = 1 > 1 ? NO → stop

Swap a[0], a[0] (same element, no change)
i = 1
j = -1


Partition done.

Conditions:

Left:

if (0 < -1) → FALSE


Right:

if (1 < 1) → FALSE


No more recursion.

==========================================
🎉 LEFT SIDE COMPLETELY SORTED:
[1, 3, 4, 7, 9, 8]

==========================================
✅ RIGHT RECURSION: quickSort(a, 3, 5)

Subarray: [7, 9, 8]

Pivot = middle = a[(3+5)/2] = a[4] = 9

i = 3
j = 5
pivot = 9

🔵 PASS 1

Move i →

a[i] = 7 < 9 → i=4
a[i] = 9 < 9 ? NO → stop


Move j ←

a[j] = 8 > 9 ? NO → stop


Swap a[4], a[5] → (9 ↔ 8)

Array:

[1, 3, 4, 7, 8, 9]


i = 5
j = 4
Loop ends.

Left part: 3 → 4
Right part: 5 → 5

CONDITIONS:
if (3 < 4) → TRUE → quickSort(a, 3, 4)
if (5 < 5) → FALSE

==========================================
🔹 quickSort(a, 3, 4)

Subarray: [7, 8]

Pivot = a[3] = 7

i = 3
j = 4


Move i:

a[i] = 7 < 7 ? NO


Move j:

a[j] = 8 > 7 → j=3
a[j] = 7 > 7 ? NO


Swap → swap same element
i=4, j=2

Conditions:

if (3 < 2) FALSE
if (4 < 4) FALSE


No recursion.

🎉 FINAL SORTED ARRAY
[1, 3, 4, 7, 8, 9]


      `
    },
    {
      id: 36,
      question: "36. Merge Sort – Divide, Conquer, Merge.",
      answer: "",
      codeExample: `
⭐ 1. Merge Sort (Easy Explanation)

Merge Sort works in three steps:

⭐ 1. Divide (Break the array)

👉 Break the array into two parts
👉 Then break those parts again
👉 Keep breaking until each part has only 1 element

Example:
If array is:

[8, 3, 5, 4]


Break into two parts:

[8, 3]   and   [5, 4]


Break again:

[8] [3]   and   [5] [4]

Now each part has 1 element → stop breaking.



⭐ 2. Conquer (Sort small parts)

A single element is already sorted.
So nothing to do here.

You just take the small parts and get ready to join them.



⭐ 3. Merge (Join in sorted order)

Now join the small parts in sorted order.

Example:

Join [8] and [3] → becomes [3, 8]
Join [5] and [4] → becomes [4, 5]

Now join [3, 8] and [4, 5] →

Final result:

[3, 4, 5, 8]

This is the sorted array.



⭐ ONE-LINE MEMORY TRICK

Break → Break → Join sorted.


⭐ WHY IS IT CALLED MERGE SORT?

Because the last step joins (merges) small sorted parts
to make the final sorted array.



⭐ 2. Simple Example

Array:

[8, 3, 5, 4]

Step 1: Divide

→ Break into smaller parts
→ Until each part has one element.

Step 2: Conquer

Each small part becomes sorted automatically
(because 1 element is already sorted).

Step 3: Merge

Merge small sorted parts into bigger sorted parts
until the whole array is sorted.



Final:

[3, 4, 5, 8]

⭐ 3. Merge Sort Algorithm (Easy and Short)

MergeSort(A, low, high):

1. If low < high:
2.     mid = (low + high) / 2
3.     MergeSort(A, low, mid)       // left half
4.     MergeSort(A, mid + 1, high)  // right half
5.     Merge(A, low, mid, high)     // merge both halves


Merge Algorithm

Merge(A, low, mid, high):

1. Create two temporary arrays: left, right
2. Copy data into left and right arrays
3. Compare elements of both arrays
4. Put smaller element back into original array
5. Copy remaining elements from left (if any)
6. Copy remaining elements from right (if any)


⭐ 4. Simple & Short Merge Sort Program in C

#include <stdio.h>

void merge(int a[], int low, int mid, int high) {
    int i = low, j = mid + 1, k = 0;
    int temp[high - low + 1];

    while(i <= mid && j <= high) {
        if(a[i] < a[j])
            temp[k++] = a[i++];
        else
            temp[k++] = a[j++];
    }

    while(i <= mid)
        temp[k++] = a[i++];

    while(j <= high)
        temp[k++] = a[j++];

    for(i = low, k = 0; i <= high; i++, k++)
        a[i] = temp[k];
}

void mergeSort(int a[], int low, int high) {
    if(low < high) {
        int mid = (low + high) / 2;

        mergeSort(a, low, mid);
        mergeSort(a, mid + 1, high);

        merge(a, low, mid, high);
    }
}

int main() {
    int n, i;
    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    mergeSort(a, 0, n - 1);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}
 


--------------------------------------------------------------


⭐ ARRAY = [8, 4, 7, 3, 9, 1]

I will show:

When mergeSort() is called

What values of low, mid, high are

How merge() compares and copies values

How temp[] and a[] change

Everything step-by-step.

🚀 STEP 1 – main()
mergeSort(a, 0, 5);


So we start with:

low = 0
high = 5
array = [8, 4, 7, 3, 9, 1]

⭐ mergeSort(a, 0, 5)
mid = (0+5)/2 = 2


So two parts:

LEFT → mergeSort(a, 0, 2)
RIGHT → mergeSort(a, 3, 5)

================================================================
🔵 LEFT PART: mergeSort(a, 0, 2)
low=0, high=2
mid = (0+2)/2 = 1


Split again:

LEFT → mergeSort(a, 0,1)
RIGHT → mergeSort(a, 2,2)

🔵 mergeSort(a, 0,1)
low=0, high=1
mid = 0


LEFT → mergeSort(a,0,0)
RIGHT → mergeSort(a,1,1)

Both single → no action.

Now merge(a, 0, 0, 1)
Subarray: [8,4]

🟢 Explanation of merge(a,0,0,1)
i = 0
j = 1
temp = []


Compare:

a[i]=8, a[j]=4
4 < 8 → temp = [4], j=2


Now j > high → copy remaining i

temp = [4, 8]


Copy back into array:

a[0] = 4
a[1] = 8


Array becomes:

[4, 8, 7, 3, 9, 1]

🔵 mergeSort(a, 2,2)

Single element → do nothing
Subarray is simply [7]

🔵 Now merge(a,0,1,2)

Subarray = [4,8,7]

i = 0, j = 2
temp = []


Compare:

4 vs 7 → 4 smaller → temp=[4], i=1
8 vs 7 → 7 smaller → temp=[4,7], j=3
Copy remaining (8)
temp=[4,7,8]


Copy back:

Array becomes:

[4, 7, 8, 3, 9, 1]

⭐ LEFT SIDE COMPLETE
[4, 7, 8]

================================================================
🔴 RIGHT PART: mergeSort(a, 3, 5)
low=3, high=5
mid = 4


LEFT → mergeSort(a,3,4)
RIGHT → mergeSort(a,5,5)

🔴 mergeSort(a,3,4)
low=3, high=4
mid=3


LEFT → mergeSort(a,3,3)
RIGHT → mergeSort(a,4,4)

Both single.

Now merge(a,3,3,4)

Subarray = [3,9]

i=3, j=4
3 < 9 → temp=[3], i=4
copy remaining 9 → temp=[3,9]


Copy back:
Array becomes:

[4, 7, 8, 3, 9, 1]


(No change actually)

🔴 mergeSort(a,5,5)

Single → nothing.

Now final right merge:

merge(a,3,4,5)

Subarray = [3,9,1]

i=3, j=5


Compare:

3 vs 1 → take 1 → temp=[1], j=6
j passed → take remaining 3,9
temp=[1,3,9]


Copy back:

Array becomes:

[4, 7, 8, 1, 3, 9]

================================================================
⭐ FINAL MERGE: merge(a,0,2,5)

Left side: [4,7,8]
Right side: [1,3,9]

i=0, j=3
temp=[]


Compare step-by-step:

4 vs 1 → 1 → temp=[1]
4 vs 3 → 3 → temp=[1,3]
4 vs 9 → 4 → temp=[1,3,4]
7 vs 9 → 7 → temp=[1,3,4,7]
8 vs 9 → 8 → temp=[1,3,4,7,8]
Remaining → 9 → temp=[1,3,4,7,8,9]


Copy back:

Final array:

[1, 3, 4, 7, 8, 9]

🎉 FINAL SORTED ARRAY
1 3 4 7 8 9



------------------


Array: [4, 8, 7, 3, 9, 1]
We just finished merge(a, 0, 0, 1)


🔵 Back to mergeSort(a, 0, 2) — next step

We had:

mergeSort(a, 2, 2)   // right part of this call
mergeSort(a, 2, 2) is single element (low == high), so it returns immediately. Subarray at indices 0..2 is now: [4, 8, 7].

Now we call:

merge(a, 0, 1, 2)
Parameters: low=0, mid=1, high=2
Left part = a[0..1] = [4,8]
Right part = a[2..2] = [7]

Inside merge(a,0,1,2):

Initial:

i = low = 0
j = mid+1 = 2
k = 0
temp size = high-low+1 = 3  → temp = [ , , ]


Step-by-step comparisons:

Compare a[i]=a[0]=4 and a[j]=a[2]=7
4 < 7 → temp[0] = 4, then i++ and k++
Now: i=1, j=2, k=1, temp = [4, , ]

Compare a[i]=a[1]=8 and a[j]=a[2]=7
8 < 7? NO → take a[j] → temp[1] = 7, then j++ and k++
Now: i=1, j=3, k=2, temp = [4,7, ]


j (3) > high (2) → exit first while. Copy remaining left:

i <= mid → temp[2] = a[1] = 8, then i=2, k=3
temp = [4,7,8]


Copy temp back into a at positions i = low .. high:

a[0] = temp[0] = 4
a[1] = temp[1] = 7
a[2] = temp[2] = 8

Array becomes:

[4, 7, 8, 3, 9, 1]
Left side (indices 0..2) is now sorted: [4,7,8].



🔴 Right half of the original call: mergeSort(a, 3, 5)

Call:

mergeSort(a, 3, 5)
mid = (3+5)/2 = 4


So it calls:

mergeSort(a, 3, 4)
mergeSort(a, 5, 5)


mergeSort(a, 3, 4):

low=3, high=4, mid=3
Calls: mergeSort(a,3,3) and mergeSort(a,4,4) → both return (single elements)
Then merge(a, 3, 3, 4)


Subarray a[3..4] is [3,9] (from current full array [4,7,8,3,9,1]).
merge(a,3,3,4):

Initial:

i = 3, j = 4, k = 0, temp size = 2 → temp = [ , ]


Compare a[3]=3 and a[4]=9 → 3 < 9 → temp[0]=3, i=4,k=1
i > mid now → copy remaining right:
temp[1] = a[4] = 9

Copy back:

a[3] = 3
a[4] = 9


Array remains:

[4, 7, 8, 3, 9, 1]

(no change since it was already [3,9])

mergeSort(a, 5, 5) → single element [1], returns.


Now merge the two right subparts:

merge(a, 3, 4, 5)

Left part a[3..4] = [3,9], Right part a[5..5] = [1].

merge(a,3,4,5):

Initial:

i = 3, j = 5, k = 0, temp size = 3 → temp = [ , , ]


Step-by-step:

Compare a[3]=3 and a[5]=1 → 3 < 1? NO → take a[j]=1 → temp[0]=1, j=6,k=1
    Now j > high so exit first while.

Copy remaining left elements (i <= mid):

    temp[1] = a[3] = 3, i=4,k=2
    temp[2] = a[4] = 9, i=5,k=3

temp = [1,3,9]


Copy back into a[3..5]:

a[3] = 1
a[4] = 3
a[5] = 9


Array becomes:

[4, 7, 8, 1, 3, 9]

Right side (indices 3..5) is now [1,3,9].


🔵 Final merge of the whole array:
We now have two sorted halves:

Left a[0..2] = [4,7,8]

Right a[3..5] = [1,3,9]

Call:

merge(a, 0, 2, 5)


merge(a,0,2,5):
Initial:

i = 0, j = 3, k = 0
temp size = 6 → temp = [ , , , , , ]


Step-by-step:

Compare a[0]=4 vs a[3]=1 → take 1 → temp[0]=1, j=4,k=1
temp: [1, , , , , ]

Compare a[0]=4 vs a[4]=3 → take 3 → temp[1]=3, j=5,k=2
temp: [1,3, , , , ]

Compare a[0]=4 vs a[5]=9 → take 4 → temp[2]=4, i=1,k=3
temp: [1,3,4, , , ]

Compare a[1]=7 vs a[5]=9 → take 7 → temp[3]=7, i=2,k=4
temp: [1,3,4,7, , ]

Compare a[2]=8 vs a[5]=9 → take 8 → temp[4]=8, i=3,k=5
temp: [1,3,4,7,8, ]

Now i > mid (i=3, mid=2), copy remaining right:
temp[5] = a[5] = 9, k=6

Final temp = [1,3,4,7,8,9]

Copy back into a[0..5]:

a[0] = 1
a[1] = 3
a[2] = 4
a[3] = 7
a[4] = 8
a[5] = 9

Array becomes:
[1, 3, 4, 7, 8, 9]

✅ Final sorted array (after mergeSort(a, 0, 5)):
[1, 3, 4, 7, 8, 9]


----------------------

After merging (0,0) & (1,1), we had this:

Array = [4, 8, 7, 3, 9, 1]


Now we continue exactly from where you asked:

🔵 Back to mergeSort(a, 0, 2)

Earlier we did:

LEFT  → mergeSort(a,0,1)  ✔ (completed)
RIGHT → mergeSort(a,2,2)  ✔ (single element)


Now we must merge the two halves:

Left half = a[0..1] = [4, 8]
Right half = a[2..2] = [7]

So call:

merge(a, 0, 1, 2)


🟢 merge(a, 0, 1, 2) – STEP BY STEP

Initial values:
i = 0
j = 2
mid = 1
high = 2

temp = [ ]   (empty)

Compare a[i] and a[j]
| i | j | a[i] | a[j] |
| - | - | ---- | ---- |
| 0 | 2 | 4    | 7    |


✔ 4 < 7 → copy 4

temp = [4]
i = 1


Next compare:
| i | j | a[i] | a[j] |
| - | - | ---- | ---- |
| 1 | 2 | 8    | 7    |


✘ 8 < 7?
No → copy a[j]

temp = [4, 7]
j = 3


Now:

j = 3 > high (2)
→ stop comparing


🟣 Now copy remaining i elements:

i = 1 ≤ mid (1), so copy a[1]

temp = [4, 7, 8]
i = 2

Now i > mid → stop.


🔥 Now copy temp[] back to a[]

Indexes: 0 to 2
temp = [4, 7, 8]

a[0] = 4
a[1] = 7
a[2] = 8

🎉 Array after merge(a,0,1,2):

[4, 7, 8, 3, 9, 1]


🔵 Completed LEFT SIDE (0–2)

The entire left portion is now sorted:

Left sorted = [4, 7, 8]


⭐ NEXT STEP (ready?):
👉 Continue with Right side: mergeSort(a, 3, 5)
      `
    },
    {
      id: 37,
      question: "37. Heap Sort – Max-Heap + Heapify.",
      answer: "",
      codeExample: `
⭐ 1. What is Heap Sort? (Easy Words)

Heap Sort is a sorting method that uses a special tree-like structure called a Heap.

There are two types:

Max-Heap → biggest element on top
Min-Heap → smallest element on top

For Heap Sort, we use a Max-Heap.



⭐ 2. What is Max-Heap? (Simple Words)

A Max-Heap means:

👉 The largest number is always at the top (root).
👉 Every parent is bigger than its children.

So we can easily remove the greatest element.



⭐ 3. What is Heapify? (Very Simple)

Heapify = fixing the heap.

If one element is out of order:
👉 Heapify moves it down
👉 Until the heap becomes correct Max-Heap again.

You can remember Heapify as:

“Arrange so that parent is bigger than child.”



⭐ 4. How Heap Sort Works (Easy Steps)

Heap Sort works in two phases:

⭐ Phase 1: Build Max-Heap

Convert the entire array into a Max-Heap.
Now the largest element is at index 0.

⭐ Phase 2: Sorting

1. Swap the first element (largest) with the last element
2. Reduce heap size
3. Call heapify to fix the heap
4. Repeat until array is sorted



⭐ 5. Easy Example

Array:

[4, 10, 3, 5, 1]

Step 1: Convert to Max-Heap → largest goes to first position
Step 2: Swap first and last
Step 3: Heapify
Step 4: Repeat

Final sorted array:

[1, 3, 4, 5, 10]


⭐ 6. Heap Sort Algorithm (Easy Version)

HeapSort(A, n):

1. Build a Max-Heap from the array
2. For i = n-1 down to 1:
3.     Swap A[0] and A[i]
4.     Heapify(A, 0, i)


⭐ Heapify Algorithm

Heapify(A, i, size):

1. largest = i
2. left = 2*i + 1
3. right = 2*i + 2

4. If left < size AND A[left] > A[largest]
5.     largest = left

6. If right < size AND A[right] > A[largest]
7.     largest = right

8. If largest != i:
9.     Swap A[i] and A[largest]
10.    Heapify(A, largest, size)



⭐ 7. Simple & Short C Program for Heap Sort

#include <stdio.h>

void heapify(int a[], int n, int i) {
    int largest = i;
    int left = 2*i + 1;
    int right = 2*i + 2;
    int temp;

    if(left < n && a[left] > a[largest])
        largest = left;

    if(right < n && a[right] > a[largest])
        largest = right;

    if(largest != i) {
        temp = a[i];
        a[i] = a[largest];
        a[largest] = temp;

        heapify(a, n, largest);
    }
}

void heapSort(int a[], int n) {
    int i, temp;

    // Build Max-Heap
    for(i = n/2 - 1; i >= 0; i--)
        heapify(a, n, i);

    // Sorting
    for(i = n - 1; i >= 1; i--) {
        temp = a[0];
        a[0] = a[i];
        a[i] = temp;

        heapify(a, i, 0);
    }
}

int main() {
    int n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    heapSort(a, n);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}



--------------------------------------------------------------

⭐ ARRAY = [8, 4, 7, 3, 9, 1]

n = 6

🔹 BASIC IDEA OF HEAP SORT (1 minute)

First build a Max Heap
→ largest element comes to index 0

Then swap root with last element

Reduce heap size

Call heapify() again

Repeat until sorted

🔹 STEP 1: main()
heapSort(a, n);


So we enter:

heapSort(a, 6)
Array = [8, 4, 7, 3, 9, 1]

🔹 STEP 2: BUILD MAX HEAP
for(i = n/2 - 1; i >= 0; i--)
    heapify(a, n, i);

Why n/2 - 1?

Last non-leaf node index

For n=6 → 6/2 - 1 = 2

So loop runs:

i = 2, 1, 0

🔵 heapify(a, 6, 2)
i = 2
largest = 2
left = 2*2+1 = 5
right = 2*2+2 = 6


Array:

[8, 4, 7, 3, 9, 1]


Check:

left < n → a[5]=1 > a[2]=7 ? NO
right < n → false


No swap → return

🔵 heapify(a, 6, 1)
i = 1
largest = 1
left = 3
right = 4


Values:

a[1]=4, a[3]=3, a[4]=9


Check:

a[3] > a[1]? 3>4 NO
a[4] > a[1]? 9>4 YES → largest=4


Swap:

4 ↔ 9


Array becomes:

[8, 9, 7, 3, 4, 1]


Now recursive call:

heapify(a, 6, 4)


At index 4 → no children → return

🔵 heapify(a, 6, 0)
i = 0
largest = 0
left = 1
right = 2


Values:

a[0]=8, a[1]=9, a[2]=7


Check:

9 > 8 → largest=1
7 > 9? NO


Swap:

8 ↔ 9


Array:

[9, 8, 7, 3, 4, 1]


Recursive:

heapify(a, 6, 1)


At index 1:

left=3(3), right=4(4)
Both < 8 → no swap

✅ MAX HEAP BUILT
[9, 8, 7, 3, 4, 1]

🔹 STEP 3: SORTING PHASE
for(i = n-1; i >= 1; i--)

🔴 i = 5

Swap root with last:

9 ↔ 1


Array:

[1, 8, 7, 3, 4, 9]


Call:

heapify(a, 5, 0)

heapify(a,5,0)
largest=0
left=1(8)
right=2(7)


Largest = 1 → swap:

1 ↔ 8


Array:

[8, 1, 7, 3, 4, 9]


Recursive heapify at index 1:

left=3(3)
right=4(4)
largest=4


Swap:

1 ↔ 4


Array:

[8, 4, 7, 3, 1, 9]

🔴 i = 4

Swap:

8 ↔ 1


Array:

[1, 4, 7, 3, 8, 9]


heapify(a,4,0):

largest=2 (7)


Swap:

1 ↔ 7


Array:

[7, 4, 1, 3, 8, 9]


heapify(a,4,2) → no children

🔴 i = 3

Swap:

7 ↔ 3


Array:

[3, 4, 1, 7, 8, 9]


heapify(a,3,0):

largest=1 (4)


Swap:

3 ↔ 4


Array:

[4, 3, 1, 7, 8, 9]

🔴 i = 2

Swap:

4 ↔ 1


Array:

[1, 3, 4, 7, 8, 9]


heapify(a,2,0):

largest=1


Swap:

1 ↔ 3


Array:

[3, 1, 4, 7, 8, 9]

🔴 i = 1

Swap:

3 ↔ 1


Array:

[1, 3, 4, 7, 8, 9]


heap size = 1 → stop

🎉 FINAL SORTED ARRAY
[1, 3, 4, 7, 8, 9]


🔹 VERY SHORT SUMMARY

| Step     | Array         |
| -------- | ------------- |
| Original | [8,4,7,3,9,1] |
| Max Heap | [9,8,7,3,4,1] |
| Sorted   | [1,3,4,7,8,9] |


--------------------------------------------------------------

example: 


Given Array
[8, 4, 7, 3, 9, 1]

🔵 MAX-HEAP SORT (Ascending Order)
Step 1: Build Max-Heap

Start from last non-leaf index

n = 6 → n/2 - 1 = 2

Heapify at index 2
      8
    /   \\
   4     7
  / \\   /
 3   9 1


7 ≥ 1 → OK

[8, 4, 7, 3, 9, 1]

Heapify at index 1

Compare 4 with children (3, 9)

Largest = 9 → swap

[8, 9, 7, 3, 4, 1]

Heapify at index 0

Compare 8 with children (9, 7)

Largest = 9 → swap

[9, 8, 7, 3, 4, 1]


✅ Max-Heap built

Step 2: Heap Sort
Swap root with last element
[1, 8, 7, 3, 4, 9]


Heapify (size = 5):

[8, 4, 7, 3, 1, 9]

Next swap
[1, 4, 7, 3, 8, 9]


Heapify (size = 4):

[7, 4, 1, 3, 8, 9]

Next swap
[3, 4, 1, 7, 8, 9]


Heapify (size = 3):

[4, 3, 1, 7, 8, 9]

Next swap
[1, 3, 4, 7, 8, 9]


Heapify (size = 2):

[3, 1, 4, 7, 8, 9]

Final swap
[1, 3, 4, 7, 8, 9]

✅ Final Sorted Array (Ascending)
[1, 3, 4, 7, 8, 9]



🧠 Key Exam Lines

Max-Heap → largest element at index 0
Swap root with last
Reduce heap size
Heapify again
Repeat


      `
    },
    {
      id: 38,
      question: "38. Radix Sort – Bucket method.",
      answer: "",
      codeExample: `
⭐ 1. Radix Sort (Easy Explanation)

Radix Sort sorts numbers digit by digit, not by comparing whole numbers.

👉 It starts from the last digit (rightmost)
👉 Then moves to the next digit
👉 Continues until the biggest number is fully processed



⭐ 2. Bucket Method (Very Simple)

In Radix Sort, we use 10 buckets:

Bucket 0 → for digit 0
Bucket 1 → for digit 1
Bucket 2 → for digit 2
...
Bucket 9 → for digit 9


Each number is placed into a bucket based on its current digit.



⭐ 3. Simple Example

Array:

[170, 45, 75, 90, 802, 24, 2, 66]


🔹 Pass 1 (Last digit)

Put numbers into buckets using last digit

Result after collecting:

[170, 90, 802, 2, 24, 45, 75, 66]


🔹 Pass 2 (Second digit)

Use middle digit

Result:

[802, 2, 24, 45, 66, 170, 75, 90]


🔹 Pass 3 (First digit)

Use first digit

Final sorted array:

[2, 24, 45, 66, 75, 90, 170, 802]


⭐ 4. Radix Sort Algorithm (Bucket Method)
RadixSort(A, n):

1. Find the maximum number in array
2. Find number of digits in maximum number

3. For each digit position (ones, tens, hundreds):
4.     Create 10 empty buckets (0 to 9)
5.     Place each element in bucket according to current digit
6.     Collect elements from bucket 0 to 9 back into array



⭐ 5. Simple & Short C Program (Radix Sort using Buckets)

#include <stdio.h>

int getMax(int a[], int n) {
    int max = a[0];
    for(int i = 1; i < n; i++)
        if(a[i] > max)
            max = a[i];
    return max;
}

void radixSort(int a[], int n) {
    int bucket[10][20], count[10];
    int i, j, k, exp = 1, max;

    max = getMax(a, n);

    while(max / exp > 0) {
        for(i = 0; i < 10; i++)
            count[i] = 0;

        for(i = 0; i < n; i++) {
            int digit = (a[i] / exp) % 10;
            bucket[digit][count[digit]++] = a[i];
        }

        i = 0;
        for(j = 0; j < 10; j++)
            for(k = 0; k < count[j]; k++)
                a[i++] = bucket[j][k];

        exp = exp * 10;
    }
}

int main() {
    int n, i;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int a[n];
    printf("Enter %d elements:\\n", n);
    for(i = 0; i < n; i++)
        scanf("%d", &a[i]);

    radixSort(a, n);

    printf("Sorted array:\\n");
    for(i = 0; i < n; i++)
        printf("%d ", a[i]);

    return 0;
}


⭐ Memory Trick (Exam Ready)

Radix Sort = digit by digit sorting using buckets
      
      `
    },
    {
      id: 39,
      question: "39. Hashing – Hash table + Hash function.",
      answer: "",
      codeExample: `
⭐ 1. What is Hashing? (Very Easy)

Hashing is a technique to store and find data very fast.

👉 We use a key
👉 A hash function converts the key into an index
👉 Data is stored at that index in a hash table

⭐ 2. What is a Hash Table? (Simple Words)

A Hash Table is an array used to store data.

Each position is called a slot

Data is stored using a calculated index

Example:

Hash Table Size = 10
Index: 0 1 2 3 4 5 6 7 8 9

⭐ 3. What is a Hash Function? (Very Simple)

A Hash Function:

Takes a key

Converts it into an index

Example hash function:

h(key) = key % table_size


Example:

key = 25
table_size = 10
index = 25 % 10 = 5


So, data goes to index 5.

⭐ 4. Simple Example

Keys:

15, 25, 35


Hash function:

h(key) = key % 10


Indexes:

15 → 5
25 → 5
35 → 5


👉 More than one key gives same index → this is called collision.

⭐ 5. Simple Hashing Algorithm
HashInsert(key):

1. index = key % table_size
2. Store key at hash_table[index]

⭐ 6. Collision Handling (Easy)

When two keys get same index:

Store them in the same position using a method

Common methods:

Linear Probing

Chaining

(Only basic idea is enough for exam.)

⭐ 7. Simple & Short C Program (Hash Table with Linear Probing)
#include <stdio.h>
#define SIZE 10

int table[SIZE];

void init() {
    for(int i = 0; i < SIZE; i++)
        table[i] = -1;
}

void insert(int key) {
    int index = key % SIZE;

    while(table[index] != -1) {
        index = (index + 1) % SIZE;
    }
    table[index] = key;
}

void display() {
    for(int i = 0; i < SIZE; i++) {
        if(table[i] == -1)
            printf("%d : empty\\n", i);
        else
            printf("%d : %d\\n", i, table[i]);
    }
}

int main() {
    init();

    insert(15);
    insert(25);
    insert(35);

    display();

    return 0;
}

⭐ Memory Trick (Exam Ready)

Hashing = Key → Hash Function → Index → Hash Table
      
      `
    },
    {
      id: 40,
      question: "40. Collision resolution – Chain & Open addressing.",
      answer: "",
      codeExample: `
⭐ 1. What is Collision? (Very Easy)

A collision happens when:
👉 Two or more keys get the same index in a hash table.

Example:

Hash function: h(key) = key % 10

15 % 10 = 5
25 % 10 = 5


Both want to go to index 5 → collision.

⭐ 2. Collision Resolution Methods

Two main methods:

Chaining

Open Addressing

⭐ 3. Chaining (Easy Explanation)

In Chaining:

Each index of hash table stores a list

Multiple keys can be stored at the same index

Example:

Keys: 15, 25, 35
Index: 5

All keys are stored in a list at index 5.

⭐ Simple Chaining Algorithm
ChainingInsert(key):

1. index = key % table_size
2. Insert key into list at hash_table[index]

⭐ 4. Open Addressing (Easy Explanation)

In Open Addressing:

Only one key per index

If collision happens:
→ Find another empty index

Common Open Addressing Methods:

Linear Probing

Quadratic Probing

Double Hashing

(Linear probing is most common)

⭐ 5. Linear Probing (Simple Example)

If index is full:

Try next index → index + 1


Example:

Index 5 full → try 6 → try 7 → empty

⭐ 6. Open Addressing Algorithm (Linear Probing)
OpenAddressInsert(key):

1. index = key % table_size
2. While hash_table[index] is full:
3.     index = (index + 1) % table_size
4. Store key at hash_table[index]

⭐ 7. Simple C Program (Chaining)
#include <stdio.h>
#include <stdlib.h>
#define SIZE 10

struct Node {
    int data;
    struct Node* next;
};

struct Node* table[SIZE];

void insert(int key) {
    int index = key % SIZE;
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = key;
    newNode->next = table[index];
    table[index] = newNode;
}

void display() {
    for(int i = 0; i < SIZE; i++) {
        struct Node* temp = table[i];
        printf("%d : ", i);
        while(temp) {
            printf("%d -> ", temp->data);
            temp = temp->next;
        }
        printf("NULL\\n");
    }
}

int main() {
    for(int i = 0; i < SIZE; i++)
        table[i] = NULL;

    insert(15);
    insert(25);
    insert(35);

    display();
    return 0;
}

⭐ 8. Simple C Program (Open Addressing – Linear Probing)


#include <stdio.h>
#define SIZE 10

int table[SIZE];

void init() {
    for(int i = 0; i < SIZE; i++)
        table[i] = -1;
}

void insert(int key) {
    int index = key % SIZE;

    while(table[index] != -1)
        index = (index + 1) % SIZE;

    table[index] = key;
}

void display() {
    for(int i = 0; i < SIZE; i++) {
        if(table[i] == -1)
            printf("%d : empty\\n", i);
        else
            printf("%d : %d\\n", i, table[i]);
    }
}

int main() {
    init();

    insert(15);
    insert(25);
    insert(35);

    display();
    return 0;
}



⭐ Memory Trick (Exam Ready)

Chaining → many keys in one index (list)
Open Addressing → find next empty index
      
      `
    },
    {
      id: 1111,
      question: "",
      answer: "",
      codeExample: `
🟧 FINAL 10 QUESTIONS TO STUDY (MOST LIKELY TO COME)

Linear Search vs Binary Search with algorithm.

Bubble Sort working with diagram.

Selection Sort working.

Insertion Sort working.

Quick Sort – Pivot, Partition, Recursion.--

Merge Sort – Divide, Conquer, Merge.

Heap Sort – Max-Heap + Heapify.

Radix Sort – Bucket method.

Hashing – Hash table + Hash function.

Collision resolution – Chain & Open addressing.




🟦 SUPER IMPORTANT TABLE TO REVISE (Sorting Time Complexity)

| Algorithm | Best           | Average        | Worst      | Space    |
| --------- | -------------- | -------------- | ---------- | -------- |
| Bubble    | O(n)           | O(n²)          | O(n²)      | O(1)     |
| Selection | O(n²)          | O(n²)          | O(n²)      | O(1)     |
| Insertion | O(n)           | O(n²)          | O(n²)      | O(1)     |
| Shell     | O(n log n)     | varies         | O(n²)      | O(1)     |
| Quick     | O(n log n)     | O(n log n)     | O(n²)      | O(log n) |
| Heap      | O(n log n)     | O(n log n)     | O(n log n) | O(1)     |
| Merge     | O(n log n)     | O(n log n)     | O(n log n) | O(n)     |
| Radix     | O(nk)          | O(nk)          | O(nk)      | O(n + k) |

      
      `
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },
    {
      id: 1,
      question: "",
      answer: "",
      codeExample: ``
    },



  ];

  const toggleQuestion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="app-container">
      <h1>DSA Interview Questions</h1>
      <div className="questions-container">
        {questions.map((q) => (
          <div key={q.id} className="question-item">
            <button 
              className={`question-button ${activeId === q.id ? 'active' : ''}`}
              onClick={() => toggleQuestion(q.id)}
            >
              {q.question}
            </button>
            {activeId === q.id && (
              <div className="answer-container">
                <div className="answer">
                  <h3>Answer:</h3>
                  <p>{q.answer}</p>
                </div>
                {q.codeExample && (
                  <div className="code-example">
                    <h3>Code Example:</h3>
                    <pre>
                      <code>{q.codeExample}</code>
                    </pre>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
