Se også [[Kernen (ker)]]
![[proposition 19.10.png]]
[[Echelonform]]
*Note:* Bliver brugt i TØ opgave 11.3

# Find Nulrum
1. Omdan til echelonform
	*Note:* Sørg for at søjler med pivotelementer kun indeholder pivotelementet og ellers 0.
2. Løs ligningsystemet Ax=0
3. Omskriv til beskrivelse af frie variabler.

## Eksempel på at finde echelonform
Vi får en matrix
$$
A = 
\begin{bmatrix}
1&1&0&-2\\
1&-1&2&0\\
0&1&-1&-1
\end{bmatrix}
$$
Vi omdanner den til echelonform:
$$
\begin{bmatrix}
1&0&1&-1\\
0&1&-1&-1\\
0&0&0&0
\end{bmatrix}
$$
Vi kan nu opstille ligningsystemet:
Vi har her ligningsystemet for at finde N(A):
$$
x_0 +x_2 - x_3 = 0\\
x_1 -x_2 -x_3 = 0
$$
Dette giver os:
$$
\begin{bmatrix}
x_0\\
x_1\\
x_2\\
x_3
\end{bmatrix}=
\begin{bmatrix}
-x_2+x_3\\
x_2+x_3\\
x_2\\
x_3
\end{bmatrix}
=
x_2
\begin{bmatrix}
-1\\
1\\
1\\
0
\end{bmatrix}
+
x_3
\begin{bmatrix}
1\\
1\\
0\\
1
\end{bmatrix}
$$

Dette vil sige at nulrummet er : 
$$
\begin{bmatrix}
1\\
1\\
0\\
1
\end{bmatrix}
\begin{bmatrix}
-1\\
1\\
1\\
0
\end{bmatrix}
$$
og dette er en basis udfra [[proposition 19.10.png]]