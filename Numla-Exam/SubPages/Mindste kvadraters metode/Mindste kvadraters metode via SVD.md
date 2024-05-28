[[Singulærværdi komponering]]
#muligScript

Python kode:
``` Python
u,s,vt = np.linalg.svd(A, full_matrices = False)
uTb = u.T @ b

y = np.linalg.inv(np.diag(s))@uTb

koeffs_svd = vt.T @ y

print("\n svd \n",koeffs_svd)

```