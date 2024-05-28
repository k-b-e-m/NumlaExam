# Definition
![[Definition 21.1.png]]
![[Proposition 21.5]][[Lineært uafhængig]]
[[Basis]]
# Resultater
![[21.6.png]]
![[Definition 21.7.png]]
![[Proposition 21.16.png]]
[[Lineært uafhængig]] [[Egenværdi]]
# Find en egenvektor
I kraft af at vi kan omskrive 21.1 til (side 268)
$$
(A-\lambda I_n)v=0
$$
Kan vi finde en egenvektor ved at omdanne matricen. Eksempel:

A har egenværdien 1
$$
\begin{align}
A =
\begin{bmatrix}
3 & 1\\
2 & 2
\end{bmatrix}\\
(A-1 I_n) =
\begin{bmatrix}
3-1 & 1\\
2 & 2-1
\end{bmatrix}\\
\begin{bmatrix}
2 & 1\\
2 & 1
\end{bmatrix}\\
R_1 \rightarrow R_1 - R_0\\
\begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix}\\
\end{align}
$$
Hvis $(A-\lambda I_n)v =0$ kan vi her se at vektoren skal være $\begin{bmatrix}1\\-2\end{bmatrix}$
