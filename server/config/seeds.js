const db = require('./connection');
const { User, Posts } = require('../models');

db.once('open', async () => {
    await Posts.deleteMany();

    const posts = await Posts.insertMany([
        {
            username: 'HungryHippoEatsAlone',
            title: 'Dine and Connect: Seeking Company for Dinner at a Cozy Bistro!',
            description:
                "Tired of dining alone? Join me for a lovely evening of good food and great company at a charming bistro. Let's enjoy a delicious meal together, share stories, and connect over our love for food. All are welcome, and no one should have to eat alone! Looking forward to meeting new friends over a scrumptious meal.",
            time: '2023-05-25 19:30:00',
            location: 'Le Petit Bistro - 234 Oak Street, Anytown, USA',
            comments: [
                {
                    commentText: 'Sounds like a great idea! Count me in!',
                    username: 'FoodieFunster',
                    createdAt: new Date(),
                },
            ],
        },
        {
            username: 'FoodieFunster',
            title: 'Table for Two: Seeking Dining Companion for Italian Feast!',
            description:
                "Craving some Italian cuisine? Join me for a cozy dinner at a classic Italian restaurant. From hearty pasta to mouthwatering tiramisu, we will indulge in authentic flavors and enjoy each other's company. If you are looking for a dining companion and appreciate good food, let's share a memorable Italian feast together!",
            time: '2023-06-26 16:30:00',
            location: "Mama Mia's Trattoria - 456 Vine Avenue, Metropolis, USA",
            comments: [
                {
                    commentText:
                        "I love Italian food! Can't wait for the feast!",
                    username: 'TableForOneNoMore',
                    createdAt: new Date(),
                },
            ],
        },
        {
            username: 'TableForOneNoMore',
            title: 'Sushi and Socializing: Seeking Sushi Lover to Join Me for Dinner!',
            description:
                "Love sushi as much as I do? Let's enjoy a sushi extravaganza together at a popular sushi restaurant. We'll sample fresh sashimi, creative rolls, and share our mutual love for this Japanese delicacy. Whether you're a sushi connoisseur or new to the world of sushi, come join me for a delicious and social dining experience!",
            time: ' 2023-07-27 17:30:00',
            location: 'Sushi Paradise - 789 Sakura Street, Cityville, USA',
            comments: [
                {
                    commentText:
                        "Sushi is my favorite! I'm in for a sushi extravaganza!",
                    username: 'NoMoreLonelyMeals',
                    createdAt: new Date(),
                },
            ],
        },
        {
            username: 'NoMoreLonelyMeals',
            title: 'Burger Buddy: Seeking Foodie to Share a Burger Feast!',
            description:
                "Hey, I want to try this new burger joint! I have been craving burgers, but all my friends are vegetarian. Join me for a casual and delicious burger dinner at a local burger joint. Let's satisfy our burger cravings and make new foodie friends!",
            time: ' 2023-08-28 18:30:00',
            location: 'The Burger Shack - 101 Main Street, Burgerville, USA',
            comments: [
                {
                    commentText:
                        'Burgers are always a good idea! See you there!',
                    username: 'HungryHippoEatsAlone',
                    createdAt: new Date(),
                },
            ],
        },
    ]);

    console.log('Posts seeded 📝');


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

    console.log('Users seeded 💁');

    process.exit();
});
