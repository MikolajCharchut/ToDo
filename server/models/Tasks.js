module.exports = (sequelize, DataTypes) => {
    const Tasks = sequelize.define("Tasks", {
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      task: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Tasks.associate = (models) => {
      Tasks.hasMany(models.Notes, {
        onDelete: "cascade",
      });
    };
    return Tasks;
  };
  