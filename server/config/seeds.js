// FIXME: update to match models
const db = require('./connection');
const { User, Post } = require('../models');

db.once('open', async () => {
    await Post.deleteMany();

    const posts = await Post.insertMany([
        {
            title: 'Dine and Connect: Seeking Company for Dinner at a Cozy Bistro!',
            description:
                "Tired of dining alone? Join me for a lovely evening of good food and great company at a charming bistro. Let's enjoy a delicious meal together, share stories, and connect over our love for food. All are welcome, and no one should have to eat alone! Looking forward to meeting new friends over a scrumptious meal.",
            time: 'Thursday, May 25th, 2023 at 7:30 PM',
            location: 'Le Petit Bistro - 234 Oak Street, Anytown, USA',
        },
        {
            title: 'Table for Two: Seeking Dining Companion for Italian Feast!',
            description:
                "Craving some Italian cuisine? Join me for a cozy dinner at a classic Italian restaurant. From hearty pasta to mouthwatering tiramisu, we will indulge in authentic flavors and enjoy each other's company. If you are looking for a dining companion and appreciate good food, let's share a memorable Italian feast together!",
            time: 'Saturday, June 8th, 2023 at 6:00 PM',
            location: "Mama Mia's Trattoria - 456 Vine Avenue, Metropolis, USA",
        },
        {
            title: 'Sushi and Socializing: Seeking Sushi Lover to Join Me for Dinner!',
            description:
                "Love sushi as much as I do? Let's enjoy a sushi extravaganza together at a popular sushi restaurant. We'll sample fresh sashimi, creative rolls, and share our mutual love for this Japanese delicacy. Whether you're a sushi connoisseur or new to the world of sushi, come join me for a delicious and social dining experience!",
            time: ' Sunday, July 14th, 2023 at 7:00 PM',
            location: 'Sushi Paradise - 789 Sakura Street, Cityville, USA',
        },
        {
            title: 'Burger Buddy: Seeking Foodie to Share a Burger Feast!',
            description:
                "Hey, I want to try this new burger joint! I have been craving burgers, but all my friends are vegetarian. Join me for a casual and delicious burger dinner at a local burger joint. Let's satisfy our burger cravings and make new foodie friends!",
            time: ' Friday, August 18th, 2023 at 6:30 PM',
            location: 'The Burger Shack - 101 Main Street, Burgerville, USA',
        },
        {},
        {},
        {},
    ]);

    console.log('Posts seeded');

    await User.deleteMany();

    await User.create(
        {
            username: 'HungryHippoEatsAlone',
            email: 'nomnomnom@gmail.com',
            password: 'BurgerLover123',
        },
        {
            username: 'FoodieFunster',
            email: 'dineanddash@yahoo.com',
            password: 'CheesyFriesRule',
        },
        {
            username: 'TableForOneNoMore',
            email: 'solofoodieadventures@hotmail.com',
            password: 'FoodieFriendFinder',
        },
        {
            username: 'NoMoreLonelyMeals',
            email: 'foodiecomrade@gmail.com',
            password: 'EatingIsBetterWithCompany',
        }
    );

    console.log('users seeded');

    process.exit();
});
