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
      answer: "A stack is a linear data structure that follows the LIFO (Last In, First Out) principle. Elements can be added or removed only from the top of the stack. \\n\tLast element inserted → first to be removed. \\n\tThink of a stack of books or plates.",
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
      answer: "Infix Expression → Operator between operands. \\n\tExample: A + B , (A + B) * C \\n\\nPostfix Expression (Reverse Polish Notation, RPN) → Operator comes after operands. \\n\tExample: A B + , A B + C *",
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

    result[k] = '\0';                  '\0' -> Marks the end of a C string
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

    result[k] = '\0';                   '\0' -> Marks the end of a C string

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

    printf("%c -> %d\\\n", c1, isalnum(c1));  // 'A' is alphanumeric → nonzero
    printf("%c -> %d\\\n", c2, isalnum(c2));  // '7' is alphanumeric → nonzero
    printf("%c -> %d\\\n", c3, isalnum(c3));  // '+' is NOT alphanumeric → 0

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
      answer: "A queue is a linear data structure that follows the FIFO (First In, First Out) principle. Elements are added at the rear (end) and removed from the front (beginning). \\n\tFirst element inserted → first to be removed. \\n\tThink of a line of people waiting. \\n\tThe first person in line is the first to get the ticket and leave.",
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
        printf("Queue Overflow\\\n");
    } else {
        if (front == -1) front = 0; // first element
        queue[++rear] = x;
        printf("%d enqueued to queue\\\n", x);
    }
}

{this queue is used only one time, after that it is full or empty.}

void dequeue() {
    if (front == -1 || front > rear) {          you must be used this condition front > rear because after some dequeue operation front will be greater than rear
        printf("Queue Underflow\\\n");
    } else {
        printf("%d dequeued from queue\\\n", queue[front++]);
    }
}


{used this code for used queue again and again}

void dequeue() {
    if (front == -1 || front > rear) {            you can used front == rear condition so you don't need write this condition (front > rear)
        printf("Queue Underflow\\\n");
    } else {
        printf("%d dequeued from queue\\\n", queue[front]);
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
        printf("Queue is Empty\\\n");
    } else {
        printf("Queue: ");
        for (int i = front; i <= rear; i++)
            printf("%d ", queue[i]);
        printf("\\\n");
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
        printf("Queue Overflow\\\n");
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
    printf("%d enqueued\\\n", x);
}

void dequeue() {
    if (front == -1) {
        printf("Queue Underflow\\\n");
    } else {
        printf("%d dequeued\\\n", queue[front]);
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
        printf("Queue is Empty\\\n");
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
    printf("\\\n");
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
        printf("Deque Overflow\\\n");
        return;
    }
    if (front == -1) front = 0;  // first element
    deque[++rear] = x;
    printf("%d inserted at rear\\\n", x);
}

// Insert at front
void insertFront(int x) {
    if (front == 0) {
        printf("No space at front\\\n");
        return;
    }
    if (front == -1) { // first element
        front = rear = 0;
    } else {
        front--;
    }
    deque[front] = x;
    printf("%d inserted at front\\\n", x);
}

// Delete from front
void deleteFront() {
    if (front == -1) {
        printf("Deque Underflow\\\n");
        return;
    }
    printf("%d deleted from front\\\n", deque[front]);
    if (front == rear) {
        front = rear = -1;
    } else {
        front++;
    }
}

// Delete from rear
void deleteRear() {
    if (rear == -1) {
        printf("Deque Underflow\\\n");
        return;
    }
    printf("%d deleted from rear\\\n", deque[rear]);
    if (front == rear) {
        front = rear = -1;
    } else {
        rear--;
    }
}

// Display
void display() {
    if (front == -1) {
        printf("Deque is empty\\\n");
        return;
    }
    printf("Deque: ");
    for (int i = front; i <= rear; i++) {
        printf("%d ", deque[i]);
    }
    printf("\\\n");
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
        printf("Deque Overflow\\\n");
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
    printf("%d inserted at front\\\n", x);
}

void insertRear(int x) {
    if (isFull()) {
        printf("Deque Overflow\\\n");
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
    printf("%d inserted at rear\\\n", x);
}

void deleteFront() {
    if (isEmpty()) {
        printf("Deque Underflow\\\n");
        return;
    }
    printf("%d deleted from front\\\n", deque[front]);
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
        printf("Deque Underflow\\\n");
        return;
    }
    printf("%d deleted from rear\\\n", deque[rear]);
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
        printf("Deque is empty\\\n");
        return;
    }
    printf("Deque: ");
    int i = front;
    while (1) {
        printf("%d ", deque[i]);
        if (i == rear) break;
        i = (i + 1) % SIZE;
    }
    printf("\\\n");
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
        printf("Priority Queue Overflow\\\n");
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
    printf("%d inserted\\\n", value);
}

// Function to remove element with highest priority (smallest value)
void dequeue() {
    if (n == 0) {
        printf("Priority Queue Underflow\\\n");
        return;
    }
    printf("%d deleted (highest priority)\\\n", pq[0]);
    for (int i = 0; i < n - 1; i++) {                          -> this for loop is used to shift left all elements after dequeue operation
        pq[i] = pq[i + 1];
    }
    n--;
}

// Display queue
void display() {
    if (n == 0) {
        printf("Priority Queue is Empty\\\n");
        return;
    }
    printf("Priority Queue: ");
    for (int i = 0; i < n; i++) {
        printf("%d ", pq[i]);
    }
    printf("\\\n");
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
    printf("Age: %d, Grade: %c\\\n", age, grade);
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
    printf("Array: %d %d %d\\\n", arr[0], arr[1], arr[2]);
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
    printf("NULL\\\n");
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
        printf("Memory not allocated!\\\n");
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
    printf("%d inserted at beginning\\\n", value);
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
    printf("%d inserted at end\\\n", value);
}

// Insert at Position
void insertPosition(int value, int pos) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;

    if (pos == 1) {
        newNode->next = head;
        head = newNode;
        printf("%d inserted at position %d\\\n", value, pos);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\\n");
        free(newNode);
        return;
    }

    newNode->next = temp->next;
    temp->next = newNode;
    printf("%d inserted at position %d\\\n", value, pos);
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) {
        printf("List is Empty!\\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;
    printf("%d deleted from beginning\\\n", temp->data);
    free(temp);
}

// Delete from End
void deleteEnd() {
    if (head == NULL) {
        printf("List is Empty!\\\n");
        return;
    }
    if (head->next == NULL) {
        printf("%d deleted from end\\\n", head->data);
        free(head);
        head = NULL;
        return;
    }
    struct Node* temp = head;
    while (temp->next->next != NULL) {
        temp = temp->next;
    }
    printf("%d deleted from end\\\n", temp->next->data);
    free(temp->next);
    temp->next = NULL;
}

// Delete from Position
void deletePosition(int pos) {
    if (head == NULL) {
        printf("List is Empty!\\\n");
        return;
    }
    if (pos == 1) {
        struct Node* temp = head;
        head = head->next;
        printf("%d deleted from position %d\\\n", temp->data, pos);
        free(temp);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL || temp->next == NULL) {
        printf("Invalid Position!\\\n");
        return;
    }

    struct Node* del = temp->next;
    temp->next = del->next;
    printf("%d deleted from position %d\\\n", del->data, pos);
    free(del);
}

// Display List
void display() {
    struct Node* temp = head;
    if (temp == NULL) {
        printf("List is Empty!\\\n");
        return;
    }
    printf("Linked List: ");
    while (temp != NULL) {
        printf("%d → ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\\n");
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
    printf("%d inserted at beginning\\\n", value);
}

// Insert at End
void insertEnd(int value) {
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    newNode->data = value;
    newNode->next = NULL;

    if (head == NULL) {
        newNode->prev = NULL;
        head = newNode;
        printf("%d inserted at end\\\n", value);
        return;
    }

    struct Node* temp = head;
    while (temp->next != NULL) {
        temp = temp->next;
    }

    temp->next = newNode;
    newNode->prev = temp;
    printf("%d inserted at end\\\n", value);
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
        printf("%d inserted at position %d\\\n", value, pos);
        return;
    }

    struct Node* temp = head;
    for (int i = 1; i < pos - 1 && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\\n");
        free(newNode);
        return;
    }

    newNode->next = temp->next;
    newNode->prev = temp;

    if (temp->next != NULL)
        temp->next->prev = newNode;

    temp->next = newNode;
    printf("%d inserted at position %d\\\n", value, pos);
}

// Delete from Beginning
void deleteBeginning() {
    if (head == NULL) {
        printf("List is Empty!\\\n");
        return;
    }
    struct Node* temp = head;
    head = head->next;

    if (head != NULL)
        head->prev = NULL;

    printf("%d deleted from beginning\\\n", temp->data);
    free(temp);
}

// Delete from End
void deleteEnd() {
    if (head == NULL) {
        printf("List is Empty!\\\n");
        return;
    }

    struct Node* temp = head;

    if (head->next == NULL) {
        printf("%d deleted from end\\\n", head->data);
        free(head);
        head = NULL;
        return;
    }

    while (temp->next != NULL) {
        temp = temp->next;
    }

    printf("%d deleted from end\\\n", temp->data);
    temp->prev->next = NULL;
    free(temp);
}

// Delete from Specific Position
void deletePosition(int pos) {
    if (head == NULL) {
        printf("List is Empty!\\\n");
        return;
    }

    struct Node* temp = head;

    if (pos == 1) {
        head = head->next;
        if (head != NULL)
            head->prev = NULL;
        printf("%d deleted from position %d\\\n", temp->data, pos);
        free(temp);
        return;
    }

    for (int i = 1; i < pos && temp != NULL; i++) {
        temp = temp->next;
    }

    if (temp == NULL) {
        printf("Invalid Position!\\\n");
        return;
    }

    if (temp->prev != NULL)
        temp->prev->next = temp->next;

    if (temp->next != NULL)
        temp->next->prev = temp->prev;

    printf("%d deleted from position %d\\\n", temp->data, pos);
    free(temp);
}

// Display Forward
void displayForward() {
    struct Node* temp = head;
    if (temp == NULL) {
        printf("List is Empty!\\\n");
        return;
    }
    printf("Forward: ");
    while (temp != NULL) {
        printf("%d ↔ ", temp->data);
        temp = temp->next;
    }
    printf("NULL\\\n");
}

// Display Backward
void displayBackward() {
    if (head == NULL) {
        printf("List is Empty!\\\n");
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
    printf("NULL\\\n");
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
        printf("List is empty\\\n");
        return;
    }
    struct Node* temp = head;
    do {
        printf("%d → ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(back to head)\\\n");
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
         / \
        B   C        ← Children
       / \   \
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
     / \
    B   C
   / \
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
        /  |  \
       B   C   D
          / \
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
       / \
      B   C
     / \
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
       / \
      2   3
     / \  /
    4  5 6


✅ Why it’s Complete:

    Levels 1 and 2 are completely filled.
    Level 3 has 3 nodes (4, 5, 6), all placed from left to right.



❌ Example 2: Not Complete

        1
       / \
      2   3
       \   \
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
       /  \
     30    70
    / \    / \
   20 40  60 80


✅ Why this is a BST:

Left child < Parent (30 < 50)
Right child > Parent (70 > 50)
And this rule applies to every subtree.



❌ Not a BST Example
        50
       /  \
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
       / \
      2   3
     / \ / \
    4  5 6  7


✅ Why it’s full:

    Node 1 has two children (2, 3)
    Node 2 has two children (4, 5)
    Node 3 has two children (6, 7)
    Nodes 4, 5, 6, 7 have no children (leaf nodes)

Hence, all nodes have either 0 or 2 children.


❌ Not a Full Binary Tree Example
        1
       / \
      2   3
       \
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
       /  \
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
       /  \
     10    30



🔁 2. RR Rotation (Left Rotation)

Unbalanced:
      10
        \
         20
           \
            30

After Left Rotation:
        20
       /  \
     10    30



🔁 3. LR Rotation (Left-Right Rotation)

Unbalanced:
        30
       /
      10
        \
         20

After LR Rotation:
        20
       /  \
     10    30



🔁 4. RL Rotation (Right-Left Rotation)

Unbalanced:
      10
        \
         30
        /
      20

After RL Rotation:
        20
       /  \
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
           /     \
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
           /     |     \
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
