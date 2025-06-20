import HeroSection from "../components/HeroSection";
import MenuSection from "../components/MenuSection";

import heroimage from "/menupageKohomeimage.jpg";
import kidscombo from "/kids-combo.png";
import soupitems from "/soup-items.png";
import indianSet from "/indian-Set-Food.png";
import RoyalThali from "/Royal-Thali-Set.png";
import BurgerPizzaSandwich from "/burger-pizza-sandwich.png";
import IndianAndAmericanBreakfast from "/indian-and-american-breakfast-package.png";
import HotelAshrayaWine from "/hotel-ashraya-wine.png";
import HotelAshrayaVodka from "/Hotel-Ashraya-vodka.png";
import HukkaAndCigrettee from "/HukkaAndCigrettee.png";
import HotelAshrayaWhiskeyPrice from "/HotelAshrayaWhiskeyPrice.png";
import BeerPrice from "/BeerDrinks.png";
import LocalChickenAndSoftDrinks from "/LocalChickenAndSoftDrink.png";
import MuttonBuffPork from "/MuttonBuffPork.png";
import SaladAndChickenSnacks from "/SaladAndChickenSnacks.png";

const menuItems = [
  {
    title: "Breakfast Menu",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <p>
          <span className="font-semibold text-lg">
            Kids Combo Set (Rs.375/-):
          </span>{" "}
          <br />
          Comes with crispy French fries, tangy sauces, juicy chicken nuggets, a
          cheese ball, and refreshing juice. Served with classic ketchup and
          creamy sauce, a favorite among kids!
        </p>
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Tandoori Options:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-medium">Tandoori Chicken Full:</span>{" "}
              Rs.1000/-
            </li>
            <li>
              <span className="font-medium">Half:</span> Rs.550/-
            </li>
            <li>
              <span className="font-medium">Chicken Tikka:</span> Rs.400/-
            </li>
            <li>
              <span className="font-medium">Chicken Malai Tikka:</span> Rs.450/-
            </li>
            <li>
              <span className="font-medium">Fish Tikka:</span> Rs.450/-
            </li>
          </ul>
        </div>
        <p>
          <em className="text-orange-700">
            The Tandoori dishes look absolutely mouthwatering, especially the
            whole roasted chicken with lemon and herbs. Rich, flavorful, and
            perfect for sharing!
          </em>
        </p>
      </div>
    ),
    image: kidscombo,
  },

  {
    title: "Soups Menu",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Creamy Soups
          </p>
          <p>
            Try Cream of Chicken (Rs.200), Mushroom (Rs.200), or Veg Soup
            (Rs.150) for a smooth start.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Tomyum Flavors
          </p>
          <p>
            Enjoy the spicy Prawn Tomyum (Rs.350) or Chicken Tomyum (Rs.300),
            full of bold flavor.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Hot and Sour
          </p>
          <p>
            Go for Chicken (Rs.250) or Veg Hot and Sour (Rs.150) if you love a
            tangy kick.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Clear Soups
          </p>
          <p>
            Keep it light with Chicken Clear (Rs.225) or Veg Clear Soup
            (Rs.150).
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Thukpa
          </p>
          <p>
            Warm up with Chicken Thukpa (Rs.250) or Veg Thukpa (Rs.200), perfect
            for any time.
          </p>
        </div>
      </div>
    ),
    image: soupitems,
  },
  {
    title: "Indian Cuisine",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Curries & Sabji
          </p>
          <p>
            Enjoy Dal Tadka or Fry (Rs.200), Mutter Paneer (Rs.400), and Kadhai
            Sabji Miloni (Rs.350) for rich vegetarian flavors.
          </p>
          <p>
            Try Chicken Curry (Rs.400), Mutton Rara Ghost (Rs.450), Dhaba Mutton
            Curry (Rs.450), Fish Curry (Rs.400), or Prawn Curry (Rs.800) for a
            classic non-veg taste.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Indian Set
          </p>
          <p>
            Choose from Plain Rice (Rs.200), Fried Rice (Rs.250), or Kashmiri
            Pulao (Rs.300) to complete your meal.
          </p>
          <p>
            Pair your curry with Plain Naan (Rs.75), Butter Naan (Rs.100),
            Garlic Naan (Rs.120), Tandoori Roti (Rs.50), or Tawa Roti (Rs.25),
            fresh and hot from the tandoor.
          </p>
        </div>
      </div>
    ),
    image: indianSet,
  },
  {
    title: "Royal Thali Set",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Veg Khana (Rs.350)
          </p>
          <p>
            Rice, daal, mutter paneer, mix veg, saag, achar, chatni, papad,
            salad, and dahi.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Chicken Khana (Rs.400)
          </p>
          <p>
            Rice, daal, chicken curry, mix veg, saag, achar, chatni, papad,
            salad, and dahi.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Local Chicken Khana (Rs.500)
          </p>
          <p>
            Rice, daal, local chicken curry, mix veg, saag, achar, chatni,
            papad, salad, and dahi.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Fish Khana (Rs.500)
          </p>
          <p>
            Rice, daal, fish curry, mix veg, saag, achar, chatni, papad, salad,
            and dahi.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Mutton Khana (Rs.550)
          </p>
          <p>
            Rice, daal, mutton curry, mix veg, saag, achar, chatni, papad,
            salad, and dahi.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Ashraya Special (Rs.650)
          </p>
          <p>
            Rice, daal, badhiya chicken curry, mix veg, saag, achar, chatni,
            papad, salad, dahi, and Lalmon.
          </p>
        </div>
      </div>
    ),
    image: RoyalThali,
  },
  {
    title: "Burgers, Pizza & Sandwiches",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Burgers
          </p>
          <p>Veg Burger (Rs.300) and Chicken Burger (Rs.400).</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Pizza
          </p>
          <p>
            Veg Pizza (Rs.450), Chicken Pizza (Rs.500), Mix Pizza (Rs.550), and
            Margherita Pizza (Rs.400).
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Sandwiches
          </p>
          <p>
            Veg Sandwich (Rs.200), Chicken Sandwich (Rs.300), and Non Veg Club
            Sandwich (Rs.400).
          </p>
        </div>
      </div>
    ),
    image: BurgerPizzaSandwich,
  },

  {
    title: "Indian Breakfast",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Jeri, Puri & Tarkari (Rs.275)
          </p>
          <p>
            Traditional combo of sweet Jeri, crispy Puri, and flavorful Tarkari.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Chole Bhature (Rs.250)
          </p>
          <p>Spicy chickpea curry served with fluffy fried Bhature.</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Aalu Paratha with Pickle & Curd (Rs.300)
          </p>
          <p>
            Stuffed potato flatbread served with tangy pickle and fresh curd.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Mix Paratha with Pickle & Curd (Rs.350)
          </p>
          <p>Mixed vegetable stuffed paratha with pickle and curd.</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Paneer Paratha with Pickle & Curd (Rs.350)
          </p>
          <p>
            Soft flatbread stuffed with spiced paneer, served with pickle and
            curd.
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            American Breakfast Package (Rs.400)
          </p>
          <p>
            Toast bread, hash brown potato, cut fruits or juice, sausages, and
            choice of milk tea, black tea, or green tea, plus egg (boiled,
            omelette, or pouch).
          </p>
        </div>
      </div>
    ),
    image: IndianAndAmericanBreakfast,
  },
  {
    title: "Hotel Ashraya Wine",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            J.P Chienet Red or White
          </p>
          <p>Rs.2450</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Robertson Red or White
          </p>
          <p>Rs.2050</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Bigmaster Red or White
          </p>
          <p>Rs.975</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Hinwa Red or White
          </p>
          <p>Rs.975</p>
        </div>
      </div>
    ),
    image: HotelAshrayaWine,
  },
  {
    title: "Hotel Ashraya Vodka",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-4">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Absolute Vodka 1000 ml
          </p>
          <p>
            Rs.555 (60 ml), Rs.1620 (180 ml), Rs.3150 (360 ml), Rs.8500 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            8848 Vodka 750 ml
          </p>
          <p>
            Rs.235 (60 ml), Rs.675 (180 ml), Rs.1300 (360 ml), Rs.2600 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Ruslan Premium Vodka 750 ml
          </p>
          <p>
            Rs.225 (60 ml), Rs.660 (180 ml), Rs.1285 (360 ml), Rs.2570 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Nude Vodka 750 ml
          </p>
          <p>
            Rs.225 (60 ml), Rs.655 (180 ml), Rs.1275 (360 ml), Rs.2550 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Seto Badh 750 ml
          </p>
          <p>
            Rs.220 (60 ml), Rs.645 (180 ml), Rs.1225 (360 ml), Rs.2450 (Full
            Bottle)
          </p>
        </div>
      </div>
    ),
    image: HotelAshrayaVodka,
  },
  {
    title: "Hukka & Cigarette",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-3">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Iced Cloud Hukka (Rs.700)
          </p>
          <p>Mint, Thousand 1, Double Apple flavors.</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Cloud Hukka (Rs.600)
          </p>
          <p>Mint, Thousand 1, Double Apple flavors.</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Normal Hukka (Rs.350)
          </p>
          <p>Mint, Thousand 1, Double Apple flavors.</p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Surya Gold (Rs.35)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Shikhar Ice (Rs.25)
          </p>
        </div>
      </div>
    ),
    image: HukkaAndCigrettee,
  },
  {
    title: "Hotel Ashraya Whiskey",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-3">
        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Gold Level 1000 ml
          </p>
          <p>
            Rs.1050 (60 ml), Rs.3100 (180 ml), Rs.6100 (360 ml), Rs.16500 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Double Black 1000 ml
          </p>
          <p>
            Rs.805 (60 ml), Rs.2400 (180 ml), Rs.4750 (360 ml), Rs.13400 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Black Level 1000 ml
          </p>
          <p>
            Rs.750 (60 ml), Rs.2150 (180 ml), Rs.4250 (360 ml), Rs.11500 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Chivas 1000 ml
          </p>
          <p>
            Rs.750 (60 ml), Rs.2150 (180 ml), Rs.4250 (360 ml), Rs.11500 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            J.D Regular/Honey 1000 ml
          </p>
          <p>
            Rs.700 (60 ml), Rs.2000 (180 ml), Rs.3900 (360 ml), Rs.10500 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Jameson 1000 ml
          </p>
          <p>
            Rs.635 (60 ml), Rs.1850 (180 ml), Rs.3600 (360 ml), Rs.9700 (Full
            Bottle)
          </p>
        </div>

        <div>
          <p className="text-lg font-semibold underline underline-offset-4 mb-1">
            Red Level 1000 ml
          </p>
          <p>
            Rs.600 (60 ml), Rs.1700 (180 ml), Rs.3300 (360 ml), Rs.9000 (Full
            Bottle)
          </p>
        </div>
        <p>And So On..</p>
      </div>
    ),
    image: HotelAshrayaWhiskeyPrice,
  },
  {
    title: "Beer",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-2">
        <p>
          <span className="font-semibold underline underline-offset-4">
            Carlsberg (650 ml):
          </span>{" "}
          Rs.575
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Tuborg Gold (650 ml):
          </span>{" "}
          Rs.525
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Tuborg Strong (650 ml):
          </span>{" "}
          Rs.485
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Tuborg Gold Can (500 ml):
          </span>{" "}
          Rs.400
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Gorkha Premium (650 ml):
          </span>{" "}
          Rs.500
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Gorkha Strong (650 ml):
          </span>{" "}
          Rs.415
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Gorkha Extra (330 ml):
          </span>{" "}
          Rs.215
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Dragon Strong (650 ml):
          </span>{" "}
          Rs.345
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Dragon Extra (330 ml):
          </span>{" "}
          Rs.195
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Barasinghe Premium (650 ml):
          </span>{" "}
          Rs.500
        </p>
        <p>
          <span className="font-semibold underline underline-offset-4">
            Apple Cider:
          </span>{" "}
          Rs.245
        </p>
      </div>
    ),
    image: BeerPrice,
  },
  {
    title: "Local Chicken & Soft Drinks",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-2">
        <p>
          <span className="font-semibold underline underline-offset-4">
            Local Whole Chicken:
          </span>{" "}
          Katnesi, Sekuwa & Curry - Rs.3500;{" "}
          <span className="font-semibold underline underline-offset-4">
            Badhiya Whole Chicken:
          </span>{" "}
          Katnesi, Sadheko & Curry - Rs.5500
        </p>

        <p>
          <span className="font-semibold underline underline-offset-4">
            Soft Drinks:
          </span>{" "}
          Coke, Fanta, Sprite, Mountain Dew (250 ml) Rs.65; Slice (250 ml)
          Rs.80; Real Juice (1 Ltr) Rs.395; Real Juice (P.G.) Rs.125;
        </p>

        <p>
          Redbull Blue Rs.250; Badam Juice Rs.105; Fresh Lemon Soda Rs.65;
          Seasonal Fresh Juice Rs.195; Seasonal Fresh Mix Juice Rs.295
        </p>

        <p>
          <span className="font-semibold underline underline-offset-4">
            Lassi & Milk Shake:
          </span>{" "}
          Plain Lassi Rs.100; Sweet Lassi Rs.125; Banana Lassi Rs.150; Milk
          Shake Rs.150
        </p>
      </div>
    ),
    image: LocalChickenAndSoftDrinks,
  },
  {
    title: "Mutton, Buff & Pork Snacks",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-2">
        <p>
          <span className="font-semibold underline underline-offset-4">
            Mutton Snacks:
          </span>{" "}
          Katnesi Rs.500; Taas Rs.550; Sekuwa Rs.600; Sadheko Rs.500
        </p>

        <p>
          <span className="font-semibold underline underline-offset-4">
            Buff Snacks:
          </span>{" "}
          Sukuti Rs.300; Sukuti Sadheko Rs.400
        </p>

        <p>
          <span className="font-semibold underline underline-offset-4">
            Pork Snacks:
          </span>{" "}
          Sekuwa Rs.375; Fry Rs.350; Sadheko Rs.350
        </p>
      </div>
    ),
    image: MuttonBuffPork,
  },
  {
    title: "Salad & Chicken Snacks",
    description: (
      <div className="text-gray-800 text-[19px] leading-relaxed space-y-2">
        <p>
          <span className="font-semibold underline underline-offset-4">
            Salads:
          </span>{" "}
          Garden Green Rs.125; Nepali Green Rs.150; Fruit Rs.300; Russian Rs.350
        </p>

        <p>
          <span className="font-semibold underline underline-offset-4">
            Chicken Snacks:
          </span>{" "}
          Sekuwa Rs.450; Sadheko Rs.400; Chau-Chau Sadheko Rs.450; Fry Rs.375;
          Choila Rs.400;
        </p>

        <p>
          Chilly with Bone Rs.375; Chilly Boneless Rs.400; Sausage Fry Rs.300;
          Garlic Nuggets Rs.400; Pangra Fry Rs.350; Duck Choila Rs.450
        </p>
      </div>
    ),
    image: SaladAndChickenSnacks,
  },
];




const MenusPage = () => {
  return (
    <>
      <HeroSection
        title="Our Menus"
        subtitle="Discover the best food behind Hotel Aashrya"
        image={heroimage}
        height="h-[70vh]"
      />

      <div className="container mx-auto px-4 py-8">
        {menuItems.map((item, index) => (
          <MenuSection
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </>
  );
};

export default MenusPage;
