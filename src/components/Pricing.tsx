import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '299',
      description: 'Perfect for starting out',
      features: [
        'Up to 50 units',
        'Basic design',
        'Standard delivery',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '599',
      description: 'Most popular choice',
      features: [
        'Up to 200 units',
        'Custom design',
        'Express delivery',
        'Priority support',
        'Free samples'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '999',
      description: 'For large orders',
      features: [
        'Unlimited units',
        'Dedicated designer',
        'Rush delivery',
        '24/7 support',
        'Free mockups',
        'Volume discount'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-navy-dark mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Affordable sublimation printing for every budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular
                  ? 'ring-2 ring-blue-600 shadow-2xl scale-105'
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              <div className={`p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-navy-dark text-white'
                  : 'bg-white'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    BEST VALUE
                  </div>
                )}

                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-navy-dark'
                }`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 text-sm ${
                  plan.popular ? 'text-blue-100' : 'text-gray-600'
                }`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-navy-dark'
                  }`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${
                    plan.popular ? 'text-blue-100' : 'text-gray-600'
                  }`}>
                    per order
                  </span>
                </div>

                <button className={`w-full py-3 rounded-lg font-bold mb-8 transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}>
                  Order Now
                </button>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className={`${
                        plan.popular ? 'text-white' : 'text-blue-600'
                      }`} size={20} />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
