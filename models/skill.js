const skills = [
  {id: 124320, skill: 'Create Functions', learned: true},
  {id: 125671, skill: 'Javascript', learned: true},
  {id: 138302, skill: 'Ruby', learned: false}
];

module.exports = {
  getAll,
  getOne
};

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}