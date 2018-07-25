module.exports = function(sequelize, Sequelize) {

    var Fund = sequelize.define('fund', {

        fund_name: {
            type: Sequelize.STRING,
        },

        symbol: {
            type: Sequelize.STRING,
        },

        expense_ratio: {
            type: Sequelize.DECIMAL,
        },
    });

    Fund.associate = function (models) {

        Fund.belongsToMany(models.user, {through: "userfund",});

    }

    return Fund;
}
