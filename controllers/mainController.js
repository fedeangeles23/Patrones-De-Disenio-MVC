

module.exports = {
    home : (req,res) => {
       return res.render('home') /* retorna el home */

    },
    about: (req,res) => {
        return res.render('about') /* retorna el about */

    },
};

