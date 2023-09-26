const compareMarks = (studentMarks) => {
    const sortedMarks = studentMarks
      .map((mark, index) => ({ mark, index: index + 1 })) // Add student index
      .sort((a, b) => b.mark - a.mark || a.index - b.index); // Sort by mark and index
  
    const positions = sortedMarks.map((student, index) => {
      return student.mark === sortedMarks[index - 1]?.mark
        ? coinToss()
          ? student.index
          : sortedMarks[index - 1].index
        : student.index;
    });
  
    return positions;
  };
  
  const coinToss = () => Math.random() < 0.5;
  
  // Example usage:
  const studentMarks = [80, 70, 80, 90, 70, 85];
  
  const positions = compareMarks(studentMarks);
  positions.forEach((position, index) => {
    console.log(`Student ${index + 1} has position: ${position}`);
  });