; Always make this the first (non-comment, non-blank) line of your file
#lang racket

(provide (all-defined-out))

; 1) Variables
(define x 3) ; val x = 3
(define y (+ x 2)) ; + is a function, call it here

; 2) Functions
(define cube1
  (lambda (x)
    (* x (* x x))))
(define cube2 ; Lambda function
  (lambda (x)
  (* x x x)))
(define (cube3 x) (* x x x))
(define (pow1 x y)
  (if (= y 0)
      1
      (* x (pow1 x (- y 1)))))
(define pow2; for use this function u need only call this function like this: ((pow2 2) 10) = result: 1024
  (lambda (x)
    (lambda (y)
      (pow1 x y))))
(define three-to-the (pow2 3))

; 3) Lists
(define (sum xs)
  (if (null? xs)
      0
      (+ (car xs) (sum(cdr xs)))))
(define (my-append xs ys)
  (if (null? xs)
      ys
      (cons (car xs) (my-append (cdr xs) ys))))

; 4) Recursive
(define (fact n) (if (= n 0) 1 (* n (fact(- n 1)))))