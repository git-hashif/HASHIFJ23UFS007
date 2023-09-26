// Define an array of candidates with their respective vote counts
const candidates = [
    { name: 'Candidate 1', votes: 1200 },
    { name: 'Candidate 2', votes: 1200 },
    { name: 'Candidate 3', votes: 1100 },
    { name: 'Candidate 4', votes: 1000 },
    // Add more candidates here
  ];
  
  // Create an array to store the final results
  const results = [];
  
  // Find candidates with equal votes
  const equalVoteCandidates = candidates.filter((candidate, index, self) =>
    self.findIndex((c) => c.votes === candidate.votes) !== index
  );
  
  // If there are candidates with equal votes, conduct tosses
  if (equalVoteCandidates.length > 0) {
    // Shuffle the candidates with equal votes randomly
    const shuffledCandidates = [...candidates].filter((candidate) =>
      equalVoteCandidates.some((c) => c.name === candidate.name)
    );
  
    // Shuffle the candidates with equal votes randomly
    shuffledCandidates.sort(() => Math.random() - 0.5);
  
    // Assign positions to the shuffled candidates
    shuffledCandidates.forEach((candidate, index) => {
      results.push({
        name: candidate.name,
        votes: candidate.votes,
        position: `${index + 1}${getOrdinalSuffix(index + 1)} Position`,
      });
    });
  } else {
    // Calculate positions for candidates without equal votes
    const sortedCandidates = [...candidates].sort((a, b) => b.votes - a.votes);
    let positionCounter = 1;
  
    sortedCandidates.forEach((candidate) => {
      results.push({
        name: candidate.name,
        votes: candidate.votes,
        position: `${positionCounter}${getOrdinalSuffix(positionCounter)} Position`,
      });
      positionCounter++;
    });
  }
  
  // Display the final results
  results.forEach((result) => {
    console.log(`${result.name}: ${result.votes} votes - ${result.position}`);
  });
  
  // Helper function to get ordinal suffix (e.g., 1st, 2nd, 3rd)
  function getOrdinalSuffix(number) {
    if (number % 10 === 1 && number % 100 !== 11) {
      return 'st';
    } else if (number % 10 === 2 && number % 100 !== 12) {
      return 'nd';
    } else if (number % 10 === 3 && number % 100 !== 13) {
      return 'rd';
    } else {
      return 'th';
    }
  }
  