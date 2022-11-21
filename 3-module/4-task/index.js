function showSalary(users, age) {
  let result = ''
  for(let i = 0; i < users.length; i++) {
    if(users[i].age <= age) {
      result += `${users[i].name}, ${users[i].balance}\n`
    }
  }
  return result.substring(0, result.length -1)
}
