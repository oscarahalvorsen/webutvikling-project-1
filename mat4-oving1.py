from numpy import *	        # Greate diagonal matrices
from scipy.linalg import solve	        # Solve linear systems
from matplotlib.pyplot import *

def tridiag(v, d, w, N):
    # Help function 
    # Returns a tridiagonal matrix A=tridiag(v, d, w) of dimension N x N.
    e = ones(N)        # array [1,1,...,1] of length N
    A = v*diag(e[1:],-1)+d*diag(e)+w*diag(e[1:],1)
    return A

# Example 1, BVP

# Define the equation 
# u'' + p*u' + q*u = r(x) on the interval [a,b]
# Boundary condition: u(a)=ua and u(b)=ub

p = 2
q = pi**2
def r(x):
    return cos(pi*x)-pi*(x+1)*sin(pi*x)
a, b = 0, 2
ua, ub = 0, 1

# The exact solution (if known)
def u_eksakt(x):
    return x/2*cos(pi*x)

# Set up the discrete system
N = 10                      # Number of intervals                  

# Start the discretization  
h = (b-a)/N                # Stepsize
x = linspace(a, b, N+1)    # The gridpoints x_0=a, x_1=a+h, .... , x_N=b 

# Make a draft of the A-matrix (first and last row have to be adjusted)
v = 1-0.5*h*p              # Subdiagonal
d = -2+h**2*q              # Diagonal
w = 1+0.5*h*p              # Superdiagonal
A = tridiag(v, d, w, N+1)  

# Make a draft of the b-vector
b = h**2*r(x)  

# Modify the first equation (left boundary) 
A[0,0] = 1
A[0,1] = 0
b[0] = ua
        
# Modify the last equation (right boundary)   
A[N,N] = 1              
A[N,N-1] = 0
b[N] = ub


U = solve(A, b)     #  Solve the equation

print(U)