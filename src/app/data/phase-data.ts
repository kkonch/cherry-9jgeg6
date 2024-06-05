export class PhaseData {
    phaseName: string = 'undefined';
    phaseInfo: string[] = [];

    public static menstrual = [
        'It\'s common to feel more sensitive or irritable during this time. Engaging in stress-reducing activities like meditation can help manage mood fluctuations.',
        'Some individuals may feel fatigued during their menstrual phase, others may find exercise beneficial for managing symptoms like cramps and bloating.',
        'Foods rich in antioxidants, such as berries, dark chocolate, nuts, and colorful fruits and vegetables, can be incorporated into your diet to support overall health and well-being during menstruation.',
        'Hormonal fluctuations during the menstrual phase can impact energy levels, leading to feelings of fatigue or lethargy. Gentle activities like stretching or short walks can also boost energy without adding additional strain. The best exercise during your period is one that feels good to you!'
    ];

    public static ovulation = [
        'Ovulation is often accompanied by an increase in estrogen levels, which can contribute to feelings of positivity, confidence, and vitality.',
        'Ovulation leads to increased energy levels and improved muscle recovery. Strength training exercises, such as lifting weights or using resistance bands, can help capitalize on this phase by building lean muscle mass and improving overall strength.',
        'Incorporating nutrient-rich foods like leafy greens, whole grains, nuts, seeds, and lean meats can provide the essential vitamins and minerals your body needs during this phase.',
        'To maintain your energy levels and support your body\'s needs, prioritize staying hydrated, getting enough sleep, and consuming regular, balanced meals.'
    ];

    public static follicular = [
        'Engaging in activities that promote mental well-being, such as yoga, meditation, or creative hobbies, can help harness these positive emotions and support overall mood stability during this phase.',
        'Focus on activities that you enjoy and that challenge different muscle groups, such as strength training, cardio workouts, yoga, or dance classes.',
        'Aim to include a variety of nutrient-dense foods in your meals, such as fruits, vegetables, whole grains, lean proteins, and healthy fats.',
        'The follicular phase is typically associated with increasing energy levels and a sense of vitality as estrogen levels rise. Prioritize staying hydrated, getting enough sleep, and fueling your body with balanced meals.'
    ];

    public static luteal = [
        'You may be feeling a little more depressed / anxious in this phase.',
        'Calming yoga may serve better than extraneous exercises in this phase.',
        'Complex carbohydrates and high-fiber foods, such as cruciferous vegetables, leafy greens and sweet potatoes, will help curb hunger. Dark chocolate, fruit, nuts and seeds are good for any cravings during this phase.',
        'It’s normal to feel sluggish, fatigued, and drops in energy as well increased cravings for carbohydrates and sweets, which can impact energy levels and mood. Keep yourself hydrated, sleep, and practice stress management techniques to keep yourself regulated!'
    ];

    public static periodItems = [
        { name: 'None', img: 'assets/images/none.png' },
        { name: 'Light', img: 'assets/images/light.png' },
        { name: 'Medium', img: 'assets/images/medium.png' },
        { name: 'Heavy', img: 'assets/images/heavy.png' },
        { name: 'Very Heavy', img: 'assets/images/super-heavy.png' }
      ];

      public static painItems = [
        { name: 'Cramps', img: 'assets/images/cramps.png' },
        { name: 'Joint Pain', img: 'assets/images/joint-pain.png' },
        { name: 'Head Pain', img: 'assets/images/head-pain.png' },
        { name: 'Back Pain', img: 'assets/images/back-pain.png' },
        { name: 'Breast Pain', img: 'assets/images/breast-pain.png' }
      ];

      public static moodItems = [
        { name: 'Happy', img: 'assets/images/happy.png' },
        { name: 'Sad', img: 'assets/images/sad.png' },
        { name: 'Angry', img: 'assets/images/angry.png' },
        { name: 'Worried', img: 'assets/images/worried.png' },
        { name: 'Loving', img: 'assets/images/loving.png' },
        { name: 'Confused', img: 'assets/images/confused.png' },
        { name: 'Mixed', img: 'assets/images/mixed.png' }
      ];

      public static exerciseItems = [
        { name: 'Rest Day', img: 'assets/images/rest-day.png' },
        { name: 'Running', img: 'assets/images/running.png' },
        { name: 'Yoga', img: 'assets/images/yoga.png' },
        { name: 'Swimming', img: 'assets/images/swimming.png' },
        { name: 'Hiking', img: 'assets/images/hiking.png' },
        { name: 'Strength', img: 'assets/images/weightlifting.png' }
      ];

      public static dietItems = [
        { name: 'Vegan', img: 'assets/images/vegan.png' },
        { name: 'Carnivore', img: 'assets/images/carnivore.png' },
        { name: 'Junk Food', img: 'assets/images/junk-food.png' },
        { name: 'Carbs', img: 'assets/images/carbohydrate.png' },
        { name: 'Pescatarian', img: 'assets/images/pescatarian.png' },
        { name: 'Balanced', img: 'assets/images/balanced.png' },
        { name: 'Random', img: 'assets/images/random.png' }
      ];

      public static energyItems = [
        { name: 'Exhausted', img: 'assets/images/exhausted.png' },
        { name: 'Tired', img: 'assets/images/tired.png' },
        { name: 'Average', img: 'assets/images/average.png' },
        { name: 'High', img: 'assets/images/high.png' },
        { name: 'Energetic', img: 'assets/images/energetic.png' },
        { name: 'Hyper', img: 'assets/images/hyper.png' }
      ];

    constructor(date: Date, symptoms: string[]) {
        if (symptoms[0] != 'none')
            this.phaseName = 'Menstrual';

        this.phaseName = 'Ovulating';

        if (this.phaseName == 'Ovulating')
            this.phaseInfo = PhaseData.ovulation;
    }

}