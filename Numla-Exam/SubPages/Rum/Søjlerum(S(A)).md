se også [[Billedmængde(im)]]
# Definition
![[Defination 12.16.png]] [[Defination 12.14.png]]
# Resultater
![[Proposition 12.18.png]]
[[Lineære ligningssystem]]
# Samme som billedmængde
![[start af eksempel 18.22 side 243.png]]

# Find Søjlerum
1. Start med en matrix A , eksempelvis:
$$
A = \begin{bmatrix}2&4&1\\
1 & 3 & 7\\
0 & 1 & 6.5\end{bmatrix}
$$
2. Omdan til [[Echelonform]]
$$
A =
\begin{bmatrix}
1 & 2 & 0.5\\
0 & 1 & 6.5\\
0 & 0 & 0
\end{bmatrix}
$$
Det kan udfra dette ses at S(A)
$$
S(A) =
\begin{bmatrix}
2\\
1\\
0
\end{bmatrix}
,
\begin{bmatrix}
4\\
3\\
1
\end{bmatrix}
$$
Dette kan bekræftes da:
$$
\begin{align}
x_0\begin{bmatrix}2\\1\\0\end{bmatrix} + x_1\begin{bmatrix}4\\3\\1\end{bmatrix} &= \begin{bmatrix}1\\7\\6.5\end{bmatrix}\\
\\
x_0 =- 12.5 &x_1  = 6.5\\
\\
\begin{bmatrix}
-25\\
-12.5\\
0\\
\end{bmatrix}
+
\begin{bmatrix}
26\\
19.5\\
6.5\\
\end{bmatrix}
&=
\begin{bmatrix}
1\\
7\\
6.5
\end{bmatrix}
\end{align}
$$
Dette er desuden en [[Basis for søjlerum]] udfra [[proposition 19.10.png]]

