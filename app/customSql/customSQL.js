
const selectQueryTutorialByID = (tutorial_id) => {
    const sqlQuery = `SELECT tutorials.title, tutorials.description FROM tutorials WHERE tutorials.id='${tutorial_id}'`;
    return sqlQuery;
};

module.exports = {
    selectQueryTutorialByID,
};