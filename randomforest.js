const RandomForest = require('random-forest');

// Define your dataset
const dataset = [
    [1, 2, 3],
    [4, 5, 6],
    // Add more data points
];

// Define the labels (target variable)
const labels = [0, 1];

// Create and train the Random Forest model
const rf = new RandomForest();
rf.train(dataset, labels, {
    numTrees: 10, // Number of trees in the forest
    numSample: 0.7, // Fraction of dataset to use for each tree
});

// Make predictions
const newPoint = [7, 8, 9];
const prediction = rf.predict(newPoint);

console.log('Prediction:', prediction);
