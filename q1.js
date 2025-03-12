const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
  ];
  
  // active students with their completion percentage
  
  let activeStudents = studentsProgress.filter(element => 
  (element.completedLessons / element.totalLessons) * 100  >= 50
  );
  //console.log(activeStudents)
  
  
  let activeStudentsWithComplitionPercentage = activeStudents.map(student => ({
    
    name : student.name,
    completionPercentage: (student.completedLessons / student.totalLessons) * 100
  }))
  
  //console.log(activeStudentsWithComplitionPercentage)
  
  
  
  
  let averageComplition = 
  activeStudentsWithComplitionPercentage.reduce((sum , percentage) => sum + percentage.completionPercentage,0)/
  activeStudentsWithComplitionPercentage.length;
  
  
  let topLearners = activeStudentsWithComplitionPercentage.filter(student => student.completionPercentage > 80)
  //console.log(topLearners)
  
  
  console.log("active students with their completion percentage" , activeStudentsWithComplitionPercentage)
  
  
  console.log("average course completion percentage:", averageComplition , "%")
