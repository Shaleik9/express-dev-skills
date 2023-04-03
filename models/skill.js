const skills = [
  {id: 124320, skill: 'Create Functions', learned: true},
  {id: 125671, skill: 'Javascript', learned: true},
  {id: 138302, skill: 'Ruby', learned: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update
};

function update(id, updatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id === id);
  Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(skill => skill.id === id);
  skills.splice(idx, 1);
}
function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.learned = false;
  skills.push(skill);
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function getAll() {
  return skills;
}