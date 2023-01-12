---
title: 'Principal Component Analysis'
date: '2022-04-15'
excerpt: 'Explaination and Implementation of PCA from scratch in python.'
coverImage: 'static/images/PCA.webp'
---

**Principal Component Analysis (PCA)** is a widely used dimensionality reduction technique that is employed in various fields such as machine learning, computer vision, and statistics. It is a powerful tool that can be used to extract the most important features from a dataset, reduce noise, and improve the performance of machine learning models. In this blog post, we will learn how to implement PCA from scratch in Python, along with the required mathematical background in detail.

The PCA algorithm can be broken down into the following steps:

**Mean centering**: The first step in PCA is to mean center the data. This means subtracting the mean of each feature from the corresponding feature values. This is done to ensure that the first principal component has zero mean.

**Covariance matrix calculation**: Next, we calculate the covariance matrix of the centered data. The covariance matrix is a d x d matrix where d is the number of features in the data. Each element in the matrix represents the covariance between two features.

**Eigenvalue and Eigenvector calculation**: Next, we find the eigenvectors and eigenvalues of the covariance matrix. Eigenvectors are the directions along which the data varies the most, and eigenvalues are the magnitudes of the variations.

**Sorting eigenvectors**: We then sort the eigenvectors by decreasing eigenvalues. This is done to ensure that the first eigenvector corresponds to the largest variation in the data, the second eigenvector corresponds to the second largest variation and so on.

**Choosing the top n_components eigenvectors**: We then choose the top n_components eigenvectors based on the number of components we want to retain.

**Projecting the data onto the new feature space**: Lastly, we project the data onto the new feature space by computing the dot product of the centered data and the chosen eigenvectors.

Now let's see how to implement PCA from scratch in Python using Numpy library:

```py
import numpy as np

def pca(X, n_components):
    """
    Perform PCA on the input dataset X.
    :param X: numpy array with shape (n_samples, n_features)
    :param n_components: number of principal components to keep
    :return: tuple (X_transformed, eigenvectors, eigenvalues)
    """
    # Mean centering
    X = X - np.mean(X, axis=0)
    # Computing the covariance matrix
    cov_matrix = np.cov(X.T)
    # Computing the eigenvectors and eigenvalues of the covariance matrix
    eigenvalues, eigenvectors = np.linalg.eig(cov_matrix)
    # Sorting the eigenvectors by decreasing eigenvalues
    eigenvectors = eigenvectors[:, np.argsort(-eigenvalues)]
    eigenvalues = eigenvalues[np.argsort(-eigenvalues)]
    # Choosing the top n_components eigenvectors
    eigenvectors = eigenvectors[:, :n_components]
    # Projecting the data onto the new feature space
    X_transformed = np.dot(X, eigenvectors)
    return X_transformed, eigenvectors, eigenvalues

# Example usage
X = np.random.rand(100, 5)
X_transformed, eigenvectors, eigenvalues = pca(X, 2)

```

The above code snippet shows how to implement PCA from scratch in Python. The function pca takes the input dataset X and the number of components to retain as input parameters. It then performs mean centering, covariance matrix calculation, eigenvalue and eigenvector calculation, sorting eigenvectors, choosing the top n_components eigenvectors, and projecting the data onto the new feature space. The function returns the transformed dataset, eigenvectors, and eigenvalues.


## Conclusion
In this blog post, we learned how to implement PCA from scratch in Python. We also learned the required mathematical background to understand the algorithm. We also saw how to use PCA to reduce the dimensionality of a dataset and improve the performance of machine learning models. I hope you found this blog post useful. If you have any questions or suggestions, feel free to ask.

