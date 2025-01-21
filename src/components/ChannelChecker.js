import React from 'react';
const normalizeString = (str) => {
    return str
        // Convert to lowercase
        .toLowerCase()
        // Remove dots and special characters except spaces initially
        .replace(/[^\w\s]/g, '')
        // Remove common articles and conjunctions
        .replace(/\b(the|a|an|and|or|but|in|on|at|to|for|of)\b/g, '')
        // Trim any remaining whitespace
        .trim();
};

// Function to generate variations of a string
const generateVariations = (str) => {
    const normalized = normalizeString(str);
    return [
        normalized,                          // with spaces preserved
        normalized.replace(/\s+/g, ''),      // all spaces removed
        normalized.replace(/\s+/g, '.'),     // spaces replaced with dots
        normalized.replace(/\.+/g, ''),      // all dots removed
        normalized.replace(/\.+/g, ' '),     // dots replaced with spaces
    ];
};

// Function to find exact match with more flexibility
const findExactMatch = (searchResults, currentQuery) => {
    // Generate all possible variations of the query
    const queryVariations = generateVariations(currentQuery);

    return searchResults?.find(item => {
        // Generate all possible variations of the channel title
        const titleVariations = generateVariations(item.snippet.title);

        // Check if any variations match
        return queryVariations.some(queryVar =>
            titleVariations.some(titleVar => queryVar === titleVar)
        );
    });
};

// Usage in your component:

const HandleChecker = ({ searchResults, currentQuery }) => {
    // Check if there's an exact match for the channel name
    const exactMatch = findExactMatch(searchResults, currentQuery);

    console.log(exactMatch, "This sieextrct meatch", searchResults, currentQuery)
    // Function to sanitize query into a handle format
    const suggestedHandle = currentQuery.replace(/[^a-zA-Z0-9]/g, '');

    return (
        <div className=" rounded-md">
            {exactMatch ? (
                <div className="text-red-600 bg-red-50 p-3 rounded-md">
                    <p className="font-medium">This channel name is already in use!</p>
                    <p className="text-sm mt-1">Try adding unique words or numbers to make it distinct and authentic.</p>
                </div>
            ) :
                <div className="text-green-600 bg-green-50 p-3 rounded-md">
                    <p className="font-medium">This channel name appears to be available!</p>
                    <p className="text-sm mt-1">Suggested handle: @{suggestedHandle}</p>
                </div>

            }

        </div>
    );
};

export default HandleChecker;