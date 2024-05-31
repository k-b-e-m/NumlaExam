# Defination
![[Defination 19.6.png]]
[[Basis]]
*Note:* Bliver brugt i TØ 11.1, 11.2

*Note:* Bemærk her også [[Proposition 19.8.png]]

# Eksempel på at finde en koordinatvektor
*Note:* Dette er fra opgave 13 i træningsøvelserne
Vi har basen:
$$
E: v_0=\begin{bmatrix}3\\2\end{bmatrix},v_1=\begin{bmatrix}-3\\3\end{bmatrix}
$$

Vi skal bestemme koordinatvektoren til vektoren $b=\begin{bmatrix}-1\\-1\end{bmatrix}$

Vi kan nu danne en udviddet matrice:
$$
\begin{align}
\begin{bmatrix}
3 & -3 & | & -1\\
2 & 3 & | & -1
\end{bmatrix}\\
\\
\textit{R0 -> R0 - R1}\\
\\
\begin{bmatrix}
1 & 0 & | & 0\\
2 & 3 & | & -1
\end{bmatrix}\\
\\
\textit{R1 -> R1 - 2R0}
\\
\begin{bmatrix}
1 & 0 & | & 0\\
0 & 3 & | & -1
\end{bmatrix}\\
\\
\textit{R1 -> 1/3 R1}
\\
\\
\begin{bmatrix}
1 & 0 & | & 0\\
0 & 1 & | & -\frac{1}{3}
\end{bmatrix}\\
\\
\end{align}
$$
Udfra dette har vi koordinatvektoren:
$$
[b]_E = \begin{bmatrix}0\\-\frac{1}{3}\end{bmatrix}
$$
