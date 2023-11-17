import React from "react";
import musubi_pic from "../recipe_assets/musubiRecipePage.png";
import DishCard from "../components/DishCard";
import jeonGol from "../homepage_assets/jeonGolHome.png";
import aboutMeImage from "../assets/aboutMeImage.png";
import RecipeCategoryHome from "../components/RecipeCategoryHome";
import asianCat from "../homepage_assets/asianCat.png";
import drinkCat from "../homepage_assets/drinkCat.png";
import dessertCat from "../homepage_assets/dessertCat.png";
import koreanCat from "../homepage_assets/koreanCat.png";
import pastaCat from "../homepage_assets/pastaCat.png";
import westernCat from "../homepage_assets/westernCat.png";

const Musubi = () => {
  return (
    <div className="bg-[#fffaf1]">
      <div className="max-w-[1000px] m-auto px-14 py-6">
        <h1 className="text-4xl sm:text-4xl font-dosis text-center text-green-800 pt-6">
          SPAM MUSUBI
        </h1>
        <p className="text-center pt-3">By: Jun Kim</p>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-green-800"></hr>
        <div className="sm:grid grid-cols-5 gap-10">
          <div class="col-span-3 pb-8 sm:pb-0">
            <img src={musubi_pic} className="rounded-lg"></img>
          </div>
          <div class="col-span-2">
            <div>
              All time classic if you grew up in an Asian household: the Spam
              Musubi. I put a bit of a Korean twist to this one as it's how my
              mom made it when I was younger. Added kketnip, aka sesame leaves,
              that enhanced the spam flavor with a bit of bitterness. Yea, it
              sounds weird but trust me, it's fucking gas.
            </div>
            <div className="grid grid-cols-3 gap-6 pt-6 sm:py-10">
              <div className="">
                <div>Cook Time</div>
                <div className="text-3xl pt-3">30 min</div>
              </div>
              <div className="text-center">
                <div>Servings</div>
                <div className="text-3xl pt-3">4</div>
              </div>
              <div className="text-center">
                <div>Difficulty</div>
                <div className="text-3xl pt-3">5/10</div>
              </div>
            </div>
          </div>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-green-800"></hr>
        <div className="sm:grid grid-cols-3 gap-10">
          <div className="col-span-2">
            <h2 className="text-3xl sm:text-3xl font-dosis text-left text-green-800 pb-4">
              INGREDIENTS
            </h2>
            <div>
              You only need 7 ingredients to make this by the way. And if you're
              Asian, odds are you probably already have 5/7 of these things at
              home.
            </div>
            <ul class="list-disc list-inside py-6">
              <li>_ cups of rice</li>
              <li>1 can of spam</li>
              <li>2 tablespoons of soy sauce</li>
              <li>squeeze of honey</li>
              <li>_ eggs</li>
              <li>5 sheets of unseasoned seaweed</li>
              <li>_ sheets of sesame leaves</li>
            </ul>
            <img src={musubi_pic} className="rounded-lg py-2 pb-6"></img>
            <div className="pb-6">
              Ingredients assembled - now, let's build.
            </div>
            <h2 className="text-3xl sm:text-3xl font-dosis text-left text-green-800 py-4">
              INSTRUCTIONS
            </h2>
            <div>
              Honestly, the process of making musubis is also pretty simple. To
              begin, though, you're gonna need a musubi maker. If you don't know
              what that is, ask your Asian friend. Just kidding lol. Here's a
              picture of it below.
            </div>
            <img src={musubi_pic} className="rounded-lg py-4"></img>
            <div>Let's start making some 'subis!</div>
            <ol class="list-decimal list-outside px-5 py-6 space-y-6">
              <li>
                First start off by cooking __ cups of rice. Since this much rice
                takes approximately 40 minutes to cook, be sure to put rice in
                first and prepare everything else while the rice is cooking.
              </li>
              <li>
                Open a can of spam and rinse over water. My mom used to tell me
                to boil it in hot water for about 3 minutes to get rid of all
                the excess fat but I usually don't do this because I get lazy
                lol. But if you wanna, by all means.
              </li>
              <li>
                Cut the spam hamburger style into 8 even pieces and fry each
                side evenly over medium-high heat. While cooking, drizzle soy
                sauce and honey over the spam. You can also marinate the spam
                pieces beforehand but I get lazy so I just do it while it's
                cooking. Make sure not to burn the pieces though - soy sauce and
                honey burn very quickly.
              </li>
              <li>
                Crack __ eggs in a bowl and beat until the yolk and whites are
                fully combined. Then place the mixture in medium heat until it
                becomes nice and fluffy like this:
              </li>
              <img src={musubi_pic} className="rounded-lg py-4"></img>
              <li>
                Cut the cooked egg and sesame leaves into spam-sized pieces so
                that when you're assembling them together, they all fit
                perfectly. Also cut the seaweed sheets in half but this time
                hotdog style.
              </li>
              <li>
                Now it's finally time to assemble. Place one sheet of seaweed on
                a cutting board or any flat surface, place the musubi maker in
                the middle, and add a small layer of rice on the bottom,
                followed by spam, egg, sesame leaves, and another small layer of
                rice on top. Once you combine those together, use the smasher
                portion of the musubi maker to really squeeze everything
                together by pushing everything down.
              </li>
              <li>
                After everything is squished together, take out the smasher and
                the musubi maker. Fold one side of the seaweed over the filling,
                then the other side over everything else. You should use some
                water at the end to stick the seeweed pieces together so the
                musubi doesn't fall apart. Here is a visualization of steps 6-8
                below:
              </li>
              <img src={musubi_pic} className="rounded-lg py-4"></img>
              <li>
                And finally, do this 8 times LOL. Stretch your neck every once
                in a while - looking down for the entire time hurts like a
                bitch.
              </li>
            </ol>
            <img src={musubi_pic} className="rounded-lg py-2 pb-2"></img>
            <div className="pt-6">
              And there you have it! Musubis, just like you'd get at L&L's
              hawaiian but with a bit of a Korean twist. What'd you think?
            </div>
          </div>
          <div className="col-span-1">
            <hr class="sm:hidden h-px my-12 bg-gray-200 border-0 dark:bg-green-800" />
            <h3 className="text-2xl sm:text-2xl font-dosis text-center sm:text-left text-green-800 pb-6">
              MORE ASIAN RECIPES
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <DishCard img={jeonGol} name="MUSHROOM JEONGOL" />
              <DishCard img={jeonGol} name="MUSHROOM JEONGOL" />
            </div>
            <hr class="sm:hidden h-px my-12 bg-gray-200 border-0 dark:bg-green-800" />
            <h3 className="text-2xl sm:text-2xl font-dosis text-center sm:text-left text-green-800 sm:pt-16 pb-6 sm:py-6">
              ABOUT ME
            </h3>
            <div className="hover:scale-105 transition duration-500 cursor-pointer">
              <img
                src={aboutMeImage}
                alt="/"
                className="w-full shadow-lg rounded-t-lg"
              />
              <div className="text-left p-3 shadow-xl rounded-b-lg bg-white bg-opacity-10 cursor-pointer">
                <h3 className="text-center sm:text-left text-lg text-[#002904] font-dosis">
                  ABOUT ME
                </h3>
                <span className="hidden sm:flex">More about me here!</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr class="h-px my-12 bg-gray-200 border-0 dark:bg-green-800" />
          <h3 className="text-2xl sm:text-3xl font-dosis text-center text-green-800 pb-6 sm:py-6">
            CHECK OUT MORE RECIPE CATEGORIES
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 py-2 pt-2 pb-8">
            <RecipeCategoryHome img={koreanCat} recipeCat="KOREAN" />
            <RecipeCategoryHome img={asianCat} recipeCat="ASIAN" />
            <RecipeCategoryHome img={westernCat} recipeCat="WESTERN" />
            <RecipeCategoryHome img={pastaCat} recipeCat="PASTA" />
            <RecipeCategoryHome img={dessertCat} recipeCat="DESSERT" />
            <RecipeCategoryHome img={drinkCat} recipeCat="DRINKS" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Musubi;
