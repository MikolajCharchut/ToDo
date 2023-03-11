module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define("Notes", {
      note: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Notes;
  };
  
