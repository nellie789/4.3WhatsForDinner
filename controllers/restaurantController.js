module.exports.viewAll = function(req, res, next) {
    const restaurant = {
        id: 1,
        name: 'Pizza Hut',
        image: 'https://dynl.mktgcdn.com/p/d9AXTJEWMZ156q11dLLVRHsmufNu0K-ng4JYb_4WwRI/619x464.jpg',
        rating: 2,
        category: 'Italian',
        description: 'asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as asldkfjasldf jadjfasd fasdf asdf as'
    };
    res.render('index', {restaurant});
}