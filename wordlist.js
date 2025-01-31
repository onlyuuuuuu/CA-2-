const wordList = [
  { word: "guitar", hint: "A musical instrument with strings." },
  { word: "oxygen", hint: "A colorless, odorless gas essential for life." },
  { word: "football", hint: "A popular sport played with a spherical ball." },
  { word: "history", hint: "The study of past events and human civilization." },
  { word: "pizza", hint: "A savory dish consisting of a round, flattened base with toppings." },
  { word: "jazz", hint: "A genre of music characterized by improvisation and syncopation." },
  { word: "camera", hint: "A device used to capture and record images or videos." },
  { word: "diamond", hint: "A precious gemstone known for its brilliance and hardness." },
  { word: "science", hint: "The systematic study of the structure and behavior of the physical and natural world." },
  { word: "bicycle", hint: "A human-powered vehicle with two wheels." },
  { word: "sunset", hint: "The daily disappearance of the sun below the horizon." },
  { word: "coffee", hint: "A popular caffeinated beverage made from roasted coffee beans." },
  { word: "dance", hint: "A rhythmic movement of the body often performed to music." },
  { word: "galaxy", hint: "A vast system of stars, gas, and dust held together by gravity." },
  { word: "volcano", hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected." },
  { word: "novel", hint: "A long work of fiction, typically with a complex plot and characters." },
  { word: "ballet", hint: "A classical dance form characterized by precise and graceful movements." },
  { word: "astronaut", hint: "A person trained to travel and work in space." },
  { word: "waterfall", hint: "A cascade of water falling from a height." },
  { word: "rainbow", hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light." },
  { word: "universe", hint: "All existing matter, space, and time as a whole." },
  { word: "piano", hint: "A musical instrument played by pressing keys that cause hammers to strike strings." },
  { word: "vacation", hint: "A period of time devoted to pleasure, rest, or relaxation." },
  { word: "theater", hint: "A building or outdoor area in which plays, movies, or other performances are staged." },
  { word: "desert", hint: "A barren or arid land with little or no precipitation." },
  { word: "sunflower", hint: "A tall plant with a large yellow flower head." },
  { word: "fantasy", hint: "A genre of imaginative fiction involving magic and supernatural elements." },
  { word: "breeze", hint: "A gentle wind." },
  { word: "oasis", hint: "A fertile spot in a desert where water is found." },
  { word: "safari", hint: "An expedition or journey, typically to observe wildlife in their natural habitat." },
  { word: "planet", hint: "A celestial body that orbits a star and does not produce light of its own." },
  { word: "river", hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream." },
  { word: "mysterious", hint: "Difficult or impossible to understand, explain, or identify." },
  { word: "enigma", hint: "Something that is mysterious, puzzling, or difficult to understand." },
  { word: "paradox", hint: "A statement or situation that contradicts itself or defies intuition." },
  { word: "puzzle", hint: "A game, toy, or problem designed to test ingenuity or knowledge." },
  { word: "whisper", hint: "To speak very softly or quietly, often in a secretive manner." },
  { word: "shadow", hint: "A dark area or shape produced by an object blocking the light." },
  { word: "secret", hint: "Something kept hidden or unknown to others." },
  { word: "unveil", hint: "To make known or reveal something previously secret or unknown." },
  { word: "illusion", hint: "A false perception or belief; a deceptive appearance or impression." },
  { word: "vibrant", hint: "Full of energy, brightness, and life." },
  { word: "apple", hint: "A round fruit with red or green skin and crisp flesh." },
  { word: "mountain", hint: "A large natural elevation of the earth's surface rising abruptly from the surrounding level; a large steep hill." },
  { word: "butterfly", hint: "A nectar-feeding insect with two pairs of large, often brightly colored wings that are covered with microscopic scales." },
  { word: "computer", hint: "An electronic device that processes data and performs tasks according to a set of instructions." },
  { word: "sunshine", hint: "Direct sunlight unbroken by cloud, especially over a comparatively large area." },
  { word: "candle", hint: "A cylinder or block of wax or tallow with a central wick that is lit to produce light as it burns." },
  { word: "moonlight", hint: "The light of the moon." },
  { word: "raindrop", hint: "A single drop of rain." },
  { word: "echo", hint: "A sound or series of sounds caused by the reflection of sound waves from a surface back to the listener." },
  { word: "flower", hint: "The seed-bearing part of a plant, consisting of reproductive organs (stamens and carpels) that are typically surrounded by a brightly colored corolla (petals) and a green calyx (sepals)." },
  { word: "dragon", hint: "A mythical monster like a giant reptile." },
  { word: "castle", hint: "A large building or group of buildings fortified against attack with thick walls, battlements, towers, and in many cases a moat." },
  { word: "raincoat", hint: "A waterproof or water-resistant coat worn to protect the body from rain." },
  { word: "butterfly", hint: "A nectar-feeding insect with two pairs of large, often brightly colored wings that are covered with microscopic scales." },
  { word: "windmill", hint: "A machine that converts the energy of wind into rotational energy by means of vanes called sails or blades." },
  { word: "telescope", hint: "An optical instrument designed to make distant objects appear nearer, containing an arrangement of lenses, or of curved mirrors and lenses, by which rays of light are collected and focused and the resulting image magnified." },
  { word: "television", hint: "A system for transmitting visual images and sound that are reproduced on screens, chiefly used to broadcast programs for entertainment, information, and education." },
  { word: "telephone", hint: "A system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals." },
  { word: "microphone", hint: "An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded." },
  { word: "bookshelf", hint: "A shelf for holding books, typically one of several shelves forming a unit." },
  { word: "carrot", hint: "A tapering orange-colored root eaten as a vegetable." },
  { word: "bathroom", hint: "A room containing a bathtub or a shower and usually also a washbasin and a toilet." },
  { word: "garden", hint: "A piece of ground, often near a house, used for growing flowers, fruit, or vegetables." },
  { word: "sunrise", hint: "The time in the morning when the sun appears or full daylight arrives." },
  { word: "sunset", hint: "The time in the evening when the sun disappears or daylight fades." },
  { word: "horizon", hint: "The line at which the earth's surface and the sky appear to meet." },
  { word: "candlelight", hint: "The light from a candle." },
  { word: "clock", hint: "A mechanical or electrical device for measuring time, indicating hours, minutes, and sometimes seconds by hands on a round dial or by displayed figures." },
  { word: "chocolate", hint: "A food made from roasted and ground cacao seeds, typically sweetened and eaten as confectionery." },
  { word: "bookcase", hint: "A piece of furniture with shelves for storing books." },
  { word: "globe", hint: "A spherical model of the earth or of the heavens, having a map of the earth's surface or a representation of the stars and planets." },
  { word: "island", hint: "A piece of land surrounded by water." },
  { word: "mirror", hint: "A reflective surface, typically of glass coated with a metal amalgam, that reflects a clear image." },
  { word: "rainforest", hint: "A luxuriant, dense forest rich in biodiversity, found typically in tropical areas with consistently heavy rainfall." },
  { word: "snowflake", hint: "A flake of snow, especially a feathery ice crystal, typically displaying delicate sixfold symmetry." },
  { word: "snowman", hint: "A figure of a person made of packed snow, typically with a carrot for a nose and sticks for arms." },
  { word: "snowball", hint: "A mass of snow pressed or rolled together, typically for throwing at other people in play." },
  { word: "dictionary", hint: "A book or electronic resource that lists the words of a language (typically in alphabetical order) and gives their meaning, or gives the equivalent words in a different language, often also providing information about pronunciation, origin, and usage." },
  { word: "fireplace", hint: "A place for a domestic fire, especially a grate or hearth at the base of a chimney." },
  { word: "balloon", hint: "A brightly colored rubber sac inflated with air and then sealed at the neck, used as a children's toy or a decoration." },
  { word: "library", hint: "A building or room containing collections of books, periodicals, and sometimes films and recorded music for people to read, borrow, or refer to." },
  { word: "moonlight", hint: "The light of the moon." },
  { word: "sunshine", hint: "Direct sunlight unbroken by cloud, especially over a comparatively large area." },
  { word: "carousel", hint: "A rotating machine or device, typically used for amusement, consisting of a revolving circular platform with seats for riders." },
  { word: "chocolate", hint: "A food made from roasted and ground cacao seeds, typically sweetened and eaten as confectionery." },
  { word: "watermelon", hint: "A large melon with a hard, green rind and sweet, juicy, usually pink or red flesh." },
  { word: "umbrella", hint: "A portable device consisting of a light, collapsible frame covered with fabric, carried for protection against rain or sun." },
  { word: "lighthouse", hint: "A tower or other structure containing a beacon light to warn or guide ships at sea." },
  { word: "castle", hint: "A large building or group of buildings fortified against attack with thick walls, battlements, towers, and in many cases a moat." },
  { word: "treasure", hint: "A quantity of precious metals, gems, or other valuable objects." },
  { word: "seashell", hint: "The shell of a marine mollusk, typically having a spiral structure." },
  { word: "cherry", hint: "A small, round stone fruit that is typically bright or dark red." },
  { word: "butterfly", hint: "A nectar-feeding insect with two pairs of large, often brightly colored wings that are covered with microscopic scales." },
  { word: "penguin", hint: "A large flightless seabird of the southern hemisphere, with black upper parts and white underparts and wings developed into flippers for swimming underwater." },
  { word: "pineapple", hint: "A tropical plant with edible multiple fruit consisting of coalesced berries, also called pineapples, and the most economically significant plant in the Bromeliaceae family." },
  { word: "caterpillar", hint: "The larva of a butterfly or moth, having a segmented wormlike body with three pairs of true legs and several pairs of leglike appendages." },
  { word: "squirrel", hint: "An agile tree-dwelling rodent with a bushy tail, typically feeding on nuts and seeds." },
  { word: "octopus", hint: "A cephalopod mollusk with eight sucker-bearing arms, a soft, gelatinous body, strong beaklike jaws, and no internal shell." },
  { word: "strawberry", hint: "A sweet soft red fruit with a seed-studded surface." },
  { word: "dragonfly", hint: "A fast-flying long-bodied predatory insect with two pairs of large transparent wings that are spread out sideways at rest." },
  { word: "ladybug", hint: "A small beetle with a domed back, typically red or yellow with black spots." },
  { word: "dolphin", hint: "A small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back." },
  { word: "elephant", hint: "A heavy plant-eating mammal with a prehensile trunk, long curved ivory tusks, and large ears, native to Africa and southern Asia." },
  { word: "kangaroo", hint: "A large plant-eating marsupial with a long powerful tail and strongly developed hind limbs that enable it to travel by leaping, found only in Australia and New Guinea." },
  { word: "zebra", hint: "An African wild horse with black-and-white stripes and an erect mane." },
  { word: "giraffe", hint: "A large African mammal with a very long neck and forelegs, having a coat patterned with brown patches separated by lighter lines." },
  { word: "hippopotamus", hint: "A large thick-skinned semiaquatic African mammal, with massive jaws and large tusks." },
  { word: "rhinoceros", hint: "A large, heavily built plant-eating mammal with one or two horns on the nose and thick folded skin, native to Africa and southern Asia." },
  { word: "cheetah", hint: "A large slender spotted cat found in Africa and parts of Asia." },
  { word: "crocodile", hint: "A large predatory semiaquatic reptile with long jaws, long tail, short legs, and a horny textured skin." },
  { word: "tiger", hint: "A very large solitary cat with a yellow-brown coat striped with black, native to the forests of Asia but becoming increasingly rare." },
  { word: "lion", hint: "A large tawny-colored cat that lives in prides, found in Africa and northwestern India. The male has a flowing mane and takes little part in hunting, which is done cooperatively by the females." },
  { word: "leopard", hint: "A large solitary cat that has a fawn or brown coat with black spots and usually hunts at night, found mainly in the forests of Africa and southern Asia." },
  { word: "monkey", hint: "A small to medium-sized primate that typically has a long tail, most kinds of which live in trees in tropical countries." },
  { word: "gorilla", hint: "The largest living primate, a heavily built great ape with a large head and short neck, found in the forests of central Africa." },
  { word: "panda", hint: "A large bearlike mammal with characteristic black-and-white markings, native to certain mountain forests of central and western China." },
  { word: "penguin", hint: "A large flightless seabird of the southern hemisphere, with black upper parts and white underparts and wings developed into flippers for swimming underwater." },
  { word: "polar bear", hint: "A large white carnivorous bear that lives in the Arctic." },
  { word: "seal", hint: "A large semiaquatic marine mammal with flippers." },
  { word: "whale", hint: "A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing." },
  { word: "dolphin", hint: "A small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back." },
  { word: "seahorse", hint: "A small marine fish with a horselike head and curled tail, related to the pipefish." },
  { word: "jellyfish", hint: "A free-swimming marine coelenterate with a jellylike bell- or saucer-shaped body that is typically transparent and has stinging tentacles around the edge." },
  { word: "squid", hint: "A sea mollusk with a long, tapered body, eight arms, and two long tentacles, typically able to change color and rapidly swim backwards by expelling water from a tubular siphon." },
  { word: "starfish", hint: "A marine echinoderm with five or more radiating arms." },
  { word: "lobster", hint: "A large marine crustacean with a cylindrical body, stalked eyes, and the first of its five pairs of limbs modified as pincers." },
  { word: "crab", hint: "A marine crustacean with a broad carapace, stalked eyes, and five pairs of legs, the first pair of which are modified as pincers." },
  { word: "octopus", hint: "A cephalopod mollusk with eight sucker-bearing arms, a soft, gelatinous body, strong beaklike jaws, and no internal shell." },
  { word: "shark", hint: "A long-bodied chiefly marine fish with a cartilaginous skeleton, a prominent dorsal fin, and toothlike scales." },
  { word: "tortoise", hint: "A slow-moving typically herbivorous land reptile of warm climates, enclosed in a scaly or leathery domed shell into which it can retract its head and thick legs." },
  { word: "turtle", hint: "A slow-moving reptile, enclosed in a scaly or leathery domed shell into which it can retract its head and thick legs." },
  { word: "alligator", hint: "A large semiaquatic reptile similar to a crocodile but with a broader and shorter head, native to the Americas and China." },
  { word: "iguana", hint: "A large lizard from tropical America and the Caribbean, with a ridge of spines along the back and a dewlap under the neck." },
  { word: "cobra", hint: "A highly venomous snake of the family Elapidae." },
  { word: "boa constrictor", hint: "A large heavy-bodied nonvenomous snake occurring in the Americas, which kills its prey by constriction." },
  { word: "rattlesnake", hint: "A venomous American pit viper that has a series of horny interlocking joints at the end of its tail that make a rattling sound when shaken." },
  { word: "python", hint: "A large snake that kills its prey by constriction and that typically has a vivid pattern of coloring." },
  { word: "anaconda", hint: "A large semiaquatic snake of the boa family, found mainly in tropical South America." },
  { word: "gecko", hint: "A small lizard with a soft skin that is able to climb smooth surfaces and walls." },
  { word: "chameleon", hint: "A small slow-moving Old World lizard with a prehensile tail, long extensible tongue, protruding eyes that rotate independently, and a highly developed ability to change color." },
  { word: "komodo dragon", hint: "A monitor lizard native to Indonesian islands, growing up to 3 meters long and having the ability to kill prey larger than itself with venomous saliva." },
  { word: "crocodile", hint: "A large predatory semiaquatic reptile with long jaws, long tail, short legs, and a horny textured skin." },
  { word: "cheetah", hint: "A large slender spotted cat found in Africa and parts of Asia." },
  { word: "puma", hint: "A large solitary cat native to the Americas." },
  { word: "jaguar", hint: "A large spotted cat native to Central and South America." },
  { word: "leopard", hint: "A large solitary cat that has a fawn or brown coat with black spots and usually hunts at night, found mainly in the forests of Africa and southern Asia." },
  { word: "lynx", hint: "A wild cat with a short tail and tufted ears, found chiefly in the northern latitudes of North America and Eurasia." },
  { word: "wildcat", hint: "A small or medium-sized cat, especially a domestic cat or its ancestor." },
  { word: "tiger", hint: "A very large solitary cat with a yellow-brown coat striped with black, native to the forests of Asia but becoming increasingly rare." },
  { word: "lion", hint: "A large tawny-colored cat that lives in prides, found in Africa and northwestern India. The male has a flowing mane and takes little part in hunting, which is done cooperatively by the females." },
  { word: "wolf", hint: "A wild carnivorous mammal of the dog family, living and hunting in packs." },
  { word: "fox", hint: "A carnivorous mammal of the dog family with a pointed muzzle and bushy tail, proverbial for its cunning." },
  { word: "coyote", hint: "A wild dog native to North America." },
  { word: "jackal", hint: "A slender long-legged wild dog that feeds on carrion, game, and fruit and often hunts cooperatively, found in Africa and southern Asia." },
  { word: "hyena", hint: "A doglike carnivorous mammal with a rounded muzzle, short fur, and a laughlike call, native to Africa and Asia." },
  { word: "bear", hint: "A large, heavy mammal that walks on the soles of its feet, with thick fur and a very short tail. Bears are related to the dog family but have a distinctive hump on the shoulders." },
  { word: "moose", hint: "A large deer with palmate antlers, a sloping back, and a growth of skin hanging from the neck, found in northern Eurasia and North America." },
  { word: "reindeer", hint: "A deer of the tundra and subarctic regions of Eurasia and North America, both sexes of which have large branching antlers." },
  { word: "elk", hint: "A large deer with a broad, flat antler in the male, found in North America and northern Eurasia." },
  { word: "caribou", hint: "Another term for reindeer, especially when wild in North America." },
  { word: "bison", hint: "A large, heavily built wild ox with shaggy fur and long horns, found mainly in North America." },
  { word: "buffalo", hint: "A heavily built wild ox with backswept horns, found mainly in the Old World tropics." },
  { word: "antelope", hint: "A swift-running deerlike mammal with smooth hair and upward-pointing horns, native to Africa and Asia." },
  { word: "gazelle", hint: "A small swift antelope found in Africa and Asia." },
  { word: "giraffe", hint: "A large African mammal with a very long neck and forelegs, having a coat patterned with brown patches separated by lighter lines." },
  { word: "hippopotamus", hint: "A large thick-skinned semiaquatic African mammal, with massive jaws and large tusks." },
  { word: "rhinoceros", hint: "A large, heavily built plant-eating mammal with one or two horns on the nose and thick folded skin, native to Africa and southern Asia." },
  { word: "zebra", hint: "An African wild horse with black-and-white stripes and an erect mane." },
  { word: "hyena", hint: "A doglike carnivorous mammal with a rounded muzzle, short fur, and a laughlike call, native to Africa and Asia." },
  { word: "wildcat", hint: "A small or medium-sized cat, especially a domestic cat or its ancestor." },
  { word: "mongoose", hint: "A small carnivorous mammal with a long body and tail and a grizzled or banded coat, native to Africa and Asia." },
  { word: "meerkat", hint: "A small burrowing African mammal with a long body, short legs, and a grizzled coat, living in large underground networks in deserts." },
  { word: "otter", hint: "A semiaquatic fish-eating mammal of the weasel family, with an elongated body, dense fur, and webbed feet." },
  { word: "penguin", hint: "A large flightless seabird of the southern hemisphere, with black upper parts and white underparts and wings developed into flippers for swimming underwater." },
  { word: "seal", hint: "A large semiaquatic marine mammal with flippers." },
  { word: "sea lion", hint: "A large eared seal found in coastal waters of the northern Pacific, noted for its loud bark and aggressive nature." },
  { word: "walrus", hint: "A large flippered marine mammal with a discontinuous distribution in the Arctic Ocean and subarctic seas of the Northern Hemisphere." },
  { word: "dolphin", hint: "A small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back." },
  { word: "porpoise", hint: "A small toothed whale with a low triangular dorsal fin and a blunt rounded snout." },
  { word: "whale", hint: "A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing." },
  { word: "killer whale", hint: "A large predatory black-and-white toothed whale with a distinctive dorsal fin, living in groups that hunt cooperatively and are known to attack large whales." },
  { word: "narwhal", hint: "A medium-sized Arctic toothed whale, related to the beluga but distinguished by its long, straight, helical tusk." },
  { word: "blue whale", hint: "The largest animal ever known to have lived on Earth, a baleen whale feeding on krill, which has a heart the size of a car and blood vessels so broad that a human could swim through them." },
  { word: "sperm whale", hint: "The largest toothed whale, with a large head, prominent rounded forehead, and a long pointed jaw, whose enormous head makes up about a third of its body length." },
  { word: "humpback whale", hint: "A large baleen whale with long flippers, knobbly protuberances on the head, and a haunting song, typically observed leaping out of the water." },
  { word: "beluga whale", hint: "A small white toothed Arctic whale with distinctive protuberances on the head, sometimes called the 'sea canary' because of its high-pitched twitter." },
  { word: "gray whale", hint: "A small gray Arctic baleen whale with a narrow jaw, found on both sides of the North Pacific." },
  { word: "fin whale", hint: "The second largest whale, an elongated baleen whale, with a small dorsal fin and a groove along the throat and chest." },
  { word: "minke whale", hint: "The smallest baleen whale, with a distinctive white band on each flipper." },
  { word: "narwhal", hint: "A medium-sized Arctic toothed whale, related to the beluga but distinguished by its long, straight, helical tusk." },
  { word: "orca", hint: "Another term for killer whale." },
  { word: "seahorse", hint: "A small marine fish with a horselike head and curled tail, related to the pipefish." },
  { word: "jellyfish", hint: "A free-swimming marine coelenterate with a jellylike bell- or saucer-shaped body that is typically transparent and has stinging tentacles around the edge." },
  { word: "coral", hint: "A hard stony substance secreted by certain marine coelenterates as an external skeleton, typically forming large reefs in warm seas." },
  { word: "starfish", hint: "A marine echinoderm with five or more radiating arms." },
  { word: "lobster", hint: "A large marine crustacean with a cylindrical body, stalked eyes, and the first of its five pairs of limbs modified as pincers." },
  { word: "crab", hint: "A marine crustacean with a broad carapace, stalked eyes, and five pairs of legs, the first pair of which are modified as pincers." },
  { word: "shrimp", hint: "A small free-swimming crustacean with an elongated body, typically marine and frequently of commercial importance as food." },
  { word: "clam", hint: "A marine bivalve mollusk with shells of equal size." },
  { word: "oyster", hint: "A marine bivalve mollusk that attaches itself permanently to a surface by means of a secreted cement." },
  { word: "scallop", hint: "A marine bivalve mollusk with a ribbed fan-shaped shell." },
  { word: "mussel", hint: "A marine bivalve mollusk with a dark elongated shell." },
  { word: "snail", hint: "A shelled gastropod, typically with a spiral shell." },
  { word: "slug", hint: "A terrestrial gastropod mollusk with a slimy coating, in particular, one that is a pest in gardens." },
  { word: "squid", hint: "A sea mollusk with a long, tapered body, eight arms, and two long tentacles, typically able to change color and rapidly swim backwards by expelling water from a tubular siphon." },
  { word: "octopus", hint: "A cephalopod mollusk with eight sucker-bearing arms, a soft, gelatinous body, strong beaklike jaws, and no internal shell." },
  { word: "cuttlefish", hint: "A marine mollusk that resembles a broad squid, having eight arms and two long tentacles." },
  { word: "urchin", hint: "A small, spiny globular animal with a round shell, found on rocks in the sea." },
  { word: "eel", hint: "A snake-like fish with a slender elongated body and poorly developed fins, proverbial for its slipperiness." },
  { word: "herring", hint: "A silvery fish (Clupea harengus) of the North Atlantic." },
  { word: "sardine", hint: "A young pilchard or other young or small herringlike fish." },
  { word: "salmon", hint: "A large edible fish that is a popular game fish, much prized for its pink flesh. Salmon mature in the sea but migrate to freshwater streams to spawn." },
  { word: "trout", hint: "A chiefly freshwater fish of the salmon family, found in both Eurasia and North America and highly valued as a game fish." },
  { word: "cod", hint: "A large marine fish with a small barbel on the chin, found in cold waters of the North Atlantic." },
  { word: "flounder", hint: "A marine fish with both eyes on one side of the head, found chiefly in coastal waters of the North Atlantic." },
  { word: "sole", hint: "A marine flatfish that is a popular food fish, having a slender body and both eyes on the right side." },
  { word: "perch", hint: "A freshwater fish, typically greenish with dark vertical bars, that is a popular pan fish." },
  { word: "pike", hint: "A chiefly freshwater fish of the perch family, with a torpedo-like body and large mouth with formidable teeth." },
  { word: "bass", hint: "A popular sport fish of the sunfish family, typically having a deep-bodied, silvery or greenish fish." },
  { word: "catfish", hint: "A freshwater fish with barbels resembling whiskers around the mouth, typically bottom-dwelling." },
  { word: "stingray", hint: "A flattened marine fish with a long tail armed with a barbed stinger, which can inflict painful wounds." },
  { word: "shark", hint: "A long-bodied chiefly marine fish with a cartilaginous skeleton, a prominent dorsal fin, and toothlike scales." },
  { word: "whale shark", hint: "The largest fish, a slow-moving filter-feeding carpet shark, found in warm marine waters and noted for its immense size." },
  { word: "hammerhead shark", hint: "A predatory shark with a flattened head and laterally extended eyes." },
  { word: "tiger shark", hint: "A large aggressive shark with dark vertical stripes on the body." },
  { word: "great white shark", hint: "A large predatory shark with a white underbelly and a bluish-grey back, known to attack humans." },
  { word: "mackerel", hint: "A fast-swimming pelagic fish of the scombrid family, typically found in tropical and subtropical seas." },
  { word: "swordfish", hint: "A large predatory fish with a long, pointed bill, a large mouth, and a tall dorsal fin, found in warm seas." },
  { word: "marlin", hint: "A large predatory fish with a spearlike snout and large scales, popular in big-game fishing." },
  { word: "sailfish", hint: "A large marine game fish with a long dorsal fin that runs almost the length of the body, noted for its high leaps out of the water when hooked." },
  { word: "barracuda", hint: "A large predatory tropical marine fish with a slender body and large jaws and teeth." },
  { word: "tuna", hint: "A large and active predatory schooling fish of the mackerel family." },
  { word: "sardine", hint: "A young pilchard or other young or small herringlike fish." },
  { word: "clam", hint: "A marine bivalve mollusk with shells of equal size." },
  { word: "oyster", hint: "A marine bivalve mollusk that attaches itself permanently to a surface by means of a secreted cement." },
  { word: "scallop", hint: "A marine bivalve mollusk with a ribbed fan-shaped shell." },
  { word: "mussel", hint: "A marine bivalve mollusk with a dark elongated shell." },
  { word: "snail", hint: "A shelled gastropod, typically with a spiral shell." },
  { word: "slug", hint: "A terrestrial gastropod mollusk with a slimy coating, in particular, one that is a pest in gardens." },
  { word: "squid", hint: "A sea mollusk with a long, tapered body, eight arms, and two long tentacles, typically able to change color and rapidly swim backwards by expelling water from a tubular siphon." },
  { word: "octopus", hint: "A cephalopod mollusk with eight sucker-bearing arms, a soft, gelatinous body, strong beaklike jaws, and no internal shell." },
  { word: "cuttlefish", hint: "A marine mollusk that resembles a broad squid, having eight arms and two long tentacles." },
  { word: "urchin", hint: "A small, spiny globular animal with a round shell, found on rocks in the sea." },
  { word: "crab", hint: "A marine crustacean with a broad carapace, stalked eyes, and five pairs of legs, the first pair of which are modified as pincers." },
  { word: "lobster", hint: "A large marine crustacean with a cylindrical body, stalked eyes, and the first of its five pairs of limbs modified as pincers." },
  { word: "shrimp", hint: "A small free-swimming crustacean with an elongated body, typically marine and frequently of commercial importance as food." },
  { word: "barnacle", hint: "A small marine crustacean with an external shell, which attaches itself permanently to a variety of surfaces." },
  { word: "krill", hint: "Small shrimplike planktonic crustaceans of the open seas." },
  { word: "plankton", hint: "The small and microscopic organisms drifting or floating in the sea or fresh water, consisting chiefly of diatoms, protozoans, small crustaceans, and the eggs and larval stages of larger animals." },
  { word: "algae", hint: "A simple, nonflowering, and typically aquatic plant of a large group that includes the seaweeds and many single-celled forms. Algae contain chlorophyll but lack true stems, roots, leaves, and vascular tissue." },
  { word: "kelp", hint: "A large brown seaweed with a high iodine content, used in medicine and also as food in Asia." },
  { word: "seaweed", hint: "Large algae growing in the sea or on rocks below the high-water mark." },
  { word: "coral", hint: "A hard stony substance secreted by certain marine coelenterates as an external skeleton, typically forming large reefs in warm seas." },
  { word: "coral reef", hint: "A ridge of rock in the sea formed by the growth and deposit of coral." },
  { word: "starfish", hint: "A marine echinoderm with five or more radiating arms." },
  { word: "urchin", hint: "A small, spiny globular animal with a round shell, found on rocks in the sea." },
  { word: "whale", hint: "A very large marine mammal with a streamlined hairless body, a horizontal tail fin, and a blowhole on top of the head for breathing." },
  { word: "dolphin", hint: "A small gregarious toothed whale that typically has a beaklike snout and a curved fin on the back." },
  { word: "porpoise", hint: "A small toothed whale with a low triangular dorsal fin and a blunt rounded snout." },
  { word: "beluga whale", hint: "A small white toothed Arctic whale with distinctive protuberances on the head, sometimes called the 'sea canary' because of its high-pitched twitter." },
  { word: "gray whale", hint: "A small gray Arctic baleen whale with a narrow jaw, found on both sides of the North Pacific." },
  { word: "killer whale", hint: "A large predatory black-and-white toothed whale with a distinctive dorsal fin, living in groups that hunt cooperatively and are known to attack large whales." },
  { word: "narwhal", hint: "A medium-sized Arctic toothed whale, related to the beluga but distinguished by its long, straight, helical tusk." },
  { word: "sperm whale", hint: "The largest toothed whale, with a large head, prominent rounded forehead, and a long pointed jaw, whose enormous head makes up about a third of its body length." },
  { word: "humpback whale", hint: "A large baleen whale with long flippers, knobbly protuberances on the head, and a haunting song, typically observed leaping out of the water." },
  { word: "blue whale", hint: "The largest animal ever known to have lived on Earth, a baleen whale feeding on krill, which has a heart the size of a car and blood vessels so broad that a human could swim through them." },
  { word: "seal", hint: "A large semiaquatic marine mammal with flippers." },
  { word: "sea lion", hint: "A large eared seal found in coastal waters of the northern Pacific, noted for its loud bark and aggressive nature." },
  { word: "walrus", hint: "A large flippered marine mammal with a discontinuous distribution in the Arctic Ocean and subarctic seas of the Northern Hemisphere." },
];