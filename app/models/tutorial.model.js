
module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("boom_shaka_laka", {
      title: {
        type: Sequelize.STRING,
        field: 'title_custom'
      },
      description: {
        type: Sequelize.STRING,
        field: 'description_custom'
      },
      published: {
        type: Sequelize.BOOLEAN,
        field: 'published_custom'
      }
    });
  
    return Tutorial;
  };