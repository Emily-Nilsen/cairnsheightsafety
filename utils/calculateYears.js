const calculateYearsOfExperience = (startingYear) => {
  const currentYear = new Date().getFullYear()
  return currentYear - startingYear
}

export default calculateYearsOfExperience
