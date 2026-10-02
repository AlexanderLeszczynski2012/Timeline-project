// ═══════════════════════════════════════════════════════
//  EVENT DATA ARRAY
//  This is the main list you'll edit to fill in real events.
//  Each object represents one card on the timeline.
//
//  Fields:
//    year      — the year the event occurred (number)
//    title     — short name of the event (string)
//    desc      — one or two sentence description (string)
//    region    — which region the event belongs to.
//                Must exactly match one of these strings:
//                "north-america" | "europe" | "asia"
//                "south-america" | "africa"
//    eventType — the category of event.
//                Must exactly match one of these strings:
//                "war" | "politics" | "exploration" | "economy"
//                "revolution" | "science" | "culture" | "trade"
//                "religion" | "indigenous" | "colonisation" | "treaty"
//
//  Events are automatically sorted by year when rendered,
//  so you can add them in any order here.
// ═══════════════════════════════════════════════════════
const events = [
  { year: 1700, title: "Start of the Great Northern War ", desc: "The Great Northern War was a major European conflict where a coalition led by Russia, Denmark-Norway, and Saxony-Poland successfully challenged and ended the supremacy of the Swedish Empire in the Baltic region ", region: "europe",          eventType: "war"       },
  { year: 1708, title: "British East India Company Merges", desc: "British East India Company & a rival company merge into the United Company of Merchants of England and continue trade throughout the Indies and East Asia. With a private army twice the size of the National British army, the company owned most of India, parts of South Asia, and Hong Kong. The company's massive influence and decisions directly lead to major events, like the Opium Wars, the Boston Tea Party, the Bengali Famine, and the Indian Rebellion. ", region: "europe", eventType: "trade" },
  { year: 1718, title: "Treaty of Passorowitz", desc: "Austria successfully pushed the Ottomans south, taking over northern Serbia, Banat, and little Walachia. ", region: "europe",        eventType: "treaty"       },
  { year: 1733, title: "Start of the War of the Polish Succession", desc: "A chaotic dispute following the death of King Augustus II where the local election of French backed Stanisław I Leszczyński was forcefully overturned by invading Russian and Austrian armies who installed Augustus III, permanently proving that a nation's king was chosen by its neighbors' armies and prompting France and Spain to use the stolen election as an excuse to seize territories in Italy and the Rhineland.", region: "europe", eventType: "war" },
  { year: 1760, title: "Industrial Revolution", desc: "A cluster of the world's greatest inventions and the turning point of the modern world took place roughly around 1760, the start of the Industrial Revolution. Things like the steam engine, the steam locomotive, and the Spinning Jenny were being invented, and everyday objects(textiles, food) were soon being mass produced by machines.", region: "europe",        eventType: "science"    },
  { year: 1772, title: "First Polish Partition", desc: "The partitions of Poland represented the end of the Polish Lithuanian Commonwealths domination inside eastern Europe and the rise of the Russian Empire. The first polish partition occurred due to a failed rebellion inside Poland in 1768. A group of polish nobility unhappy with the current king and how pro Russia he was, formed a fortress in the town of Bar, inside current day Ukraine. This rebellion caused Prussia, Austria, and Russia to all intervene, claiming they were bringing order to the 'Polish Anarchy' and kept the lands they 'restored order' to.", region: "europe",          eventType: "treaty"    },
  { year: 1789, title: "The French Revolution", desc: "The French Revolution of 1789, sparked by severe war debts and bad harvests that left the poor starving, began when King Louis XVI called a meeting of the three social classes, but its unfair voting system giving the upper 2% of the population two collective votes and the remaining 98% only one shattered the illusion of absolute royal power through widespread revolt and mass decapitations.", region: "europe", eventType: "revolution"    },
  { year: 1793, title: "Second Polish Partition", desc: "The second Polish partition occurred because inside 1791 the Polish Sejm put through the May constitution of 1791 that would modernize Poland, centralize its government and remove the foreign meddling that had been plaguing Poland. Russia then invited Nobles that were unsatisfied with the new Constitution to stop the constitution from going through via war and hence the War in Defense of the Constitution began. Russia's initial goal was to simply block the new constitution, but Prussia saw an opportunity to partition Poland again. Prussia had promised to protect Poland inside a situation like this, but Russia and Prussia struck a deal where Prussia would turn a blind eye, and they would partition Poland again causing the second partition.", region: "europe",        eventType: "treaty"         },
  { year: 1795, title: "Third Polish Partition", desc: "The third and final partition occurred because in 1794 Tadeusz Kościuszko, then a war hero from the American Revolution offered to run a rebellion against the government that had let the second partition happen. In March 1794 the revolt was launched in Krakow and had early success, but it eventually succumbed to the combined forces of Prussia and Russia. Now having the pretext to liquidate Poland in its entirety they partitioned Poland one last time and wiped it off the map for 123 years.", region: "europe",        eventType: "treaty"},
  { year: 1812, title: "Start of Napolean's Russian Campaign and Aftermath", desc: "In late 1812 when Napolean then lead his men into modern day Russia and had a disastrous loss against the Prussians, after his loss, in 1813 the Prussians officially declared war against France. In mid 1813 the Austrians officially engaged into the war on the Prussians side, against the French. The allies then pushed Napoleons army through modern day Germany, reclaiming the land and back into France. The allies then won and exiled Napolean to Elba, where he then shortly escaped 9 months later.", region: "europe",          eventType: "war"    },
  { year: 1814, title: "The Napoleonic Wars Turning Point", desc: "In 1814, The Napoleonic Wars reached a major turning point when allied coalition forces invaded France, captured Paris, and forced Emperor Napoleon Bonaparte to abdicate and go into exile. Despite being outnumbered, Napoleon fought a brilliant defensive campaign in February 1814.", region: "europe", eventType: "war"  },
  { year: 1830, title: "The July Revolution", desc: "When Parisian workers, students, and shopkeepers built street barricades and fought royal troops, forcing King Charles X to flee to Britain on August 2 and allowing politicians to install Louis-Philippe as a puppet monarch.", region: "europe",        eventType: "revolution"    },
  { year: 1849, title: "The Roman Republic", desc: "A brief democratic experiment where furious Italian citizens revolted against Pope Pius IX's refusal to grant basic freedoms, forcing the Pope to flee in disguise following his prime minister's assassination; nationalists quickly declared Rome a free republic that guaranteed religious freedom and banned the death penalty, but despite a fierce defense by Giuseppe Garibaldi, French troops invaded and crushed the republic within months to restore papal power.", region: "europe",          eventType: "politics" },
  { year: 1769, title: "Captain Cook Maps New Zealand and Australia", desc: "Captain James Cook maps the coastline of New Zealand then claims the east coast of Australia and the British crown. He also made many stops along the way ranging from Hawaii or Tahiti to Tierra Del Fuego and various small islands inhabited by indigenous people. He made incredibly accurate maps for his time that aided others as they sailed out to find islands that they could trade at. This kickstarted British colonization into the pacific region and also showed that the so-called 'mythical southern continent' at the time was real.", region: "oceania", eventType: "exploration" },
  { year: 1772, title: "Europeans Discover Easter Island", desc: "Europeans discovered Rapa Nui/ Easter Island while navigating the Pacific ocean in search of a different place, Terra Australis Incognita, the 4000 Rapa Nui islanders however were already inhabiting the island and 12 of them were killed in an unfortunate first encounter. This event is significant because the island was not mapped.", region: "oceania", eventType: "exploration" },
  { year: 1774, title: "Era of Maritime Exploration Begins", desc: "Along the coast of British Columbia was a period of intense global rivalry where powerful European countries used advanced science to map the Pacific Northwest. In 1774, Spanish explorer Juan Pérez sailed up the coast, becoming one of the first Europeans to document the area.", region: "north-america", eventType: "exploration" },
  { year: 1774, title: "The Quebec Act", desc: "Britain guaranteed religious freedom for French Catholics, restored French civil law, and expanded Quebec's boundaries to include territory in the Ohio Valley. This landmark legislation was designed to secure the loyalty of French Canadians and prevent them from siding with the American colonies as the Revolution approached.", region: "north-america", eventType: "politics"    },
  { year: 1778, title: "Captain Cook Lands at Nootka Sound", desc: "On March 29, 1778, Captain James Cook led his crew to Nootka Sound to make repairs to his ship. The Nootka People greeted Cook and both parties exchanged items — animal skins, spears, and fish hooks for nails, screws, and metals. This was the very first recorded trading between First Nations groups and Europeans on the West Coast.", region: "north-america", eventType: "trade"       },
  { year: 1717, title: "Viceroyalty of New Granada", desc: "Founded by Felipe V, the Viceroyalty of New Granada was the name given to the Spanish Empire in northern South America as part of a territorial control policy. Due to high administrative costs, low revenue, European war burdens, and independence movements, it was eventually replaced by the Grenadine Confederation in 1858 and later became the Republic of Colombia.", region: "south-america", eventType: "politics"   },
  { year: 1783, title: "Arrival of United Empire Loyalists", desc: "Following the American Revolutionary War, tens of thousands of Loyalists fled persecution in the newly independent United States and migrated to British North America, settling in Nova Scotia, Quebec, and beyond. This mass relocation reshaped the region's demographics and led to the creation of New Brunswick as a separate colony in 1784.", region: "north-america", eventType: "politics"    },
  { year: 1736, title: "Nader Shah Reunites Persia", desc: "Nader Shah built a massive military empire extending into India. From humble origins he founded the Afsharid dynasty and got the title 'Napoleon of Persia' or 'Second Alexander' for his military genius.", region: "asia",          eventType: "war"         },
  { year: 1791, title: "The Constitutional Act of 1791", desc: "Britain divided the Province of Quebec into English-speaking Upper Canada (now Ontario) and French-speaking Lower Canada (now Quebec), each granted its own elected legislative assembly while real power remained with appointed councils and the governor. Designed to satisfy both Loyalist settlers and French Canadians, it ultimately deepened the divide between the two societies.", region: "north-america", eventType: "politics"    },
  { year: 1794, title: "Founding of the Qajar Dynasty", desc: "Agha Mohammad Khan established the Qajar Dynasty, which would rule Persia until 1925. After decades of civil war, he unified the core Iranian territories, established Tehran as the capital of Persia, and fought to bring surrounding territories like Georgia under Persian control, laying the foundation for over a century of Qajar rule.", region: "asia",          eventType: "politics"    },
  { year: 1798, title: "Napoleon Invades Egypt and Syria", desc: "French Emperor Napoleon Bonaparte invaded Egypt and Syria to establish colonies to rival British holdings in India. Despite early successes like the Battle of the Pyramids, he suffered a decisive defeat at the Battle of the Nile, losing 11 of 13 ships. After a failed invasion of Syria in February 1799, he returned to France with his remaining forces in August 1799.", region: "africa",        eventType: "war"         },
  { year: 1801, title: "Emperor Alexander I Comes to Power", desc: "Emperor Alexander I came into power as the Russian emperor. In 1810 he created the State Council, an advisory legislative body composed of trusted lawmakers and government officials. The laws this council helped create influenced modern Russia's legal foundations.", region: "europe",        eventType: "politics"    },
  { year: 1808, title: "Portuguese Royal Court Moves to Brazil", desc: "The Portuguese Royal Court fled from Lisbon to Rio de Janeiro, Brazil, after France invaded Portugal. Ten thousand people fled with the court, and Brazil served as the seat of the Portuguese crown until the 1820s Liberal Revolution sent the Royal family back to Portugal.", region: "south-america", eventType: "politics"    },
  { year: 1812, title: "Start of the War of 1812", desc: "British forces, Canadian militia, and First Nations allies fought off repeated American invasions of British North America, successfully defending the colonies. The conflict helped solidify a distinct Canadian identity separate from the United States and left behind a lasting sense of shared purpose among the region's diverse inhabitants.", region: "north-america", eventType: "war"         },
  { year: 1814, title: "The Napoleonic Wars Turning Point", desc: "In 1814, The Napoleonic Wars reached a major turning point when allied coalition forces invaded France, captured Paris, and forced Emperor Napoleon Bonaparte to abdicate and go into exile. Despite being outnumbered, Napoleon fought a brilliant defensive campaign in February 1814.", region: "europe",        eventType: "war"         },
  { year: 1814, title: "Start of Post-Napoleonic Land Settlements", desc: "From late 1814 to mid 1815 a large sum of meetings were held to split the land the allies won from France. Their main goals were to make sure another superpower like France wouldn't take over the entirety of Europe again.", region: "europe",        eventType: "politics"    },
  { year: 1821, title: "North West Company and Hudson Bay Company Merger", desc: "The Hudson Bay Company and the North West Company agreed to merge under the Hudson Bay Company name. After years of violent competition, George Simpson oversaw the merger of 73 North West Company employees. The merger gave the Hudson Bay Company dominant trading power on the west coast and played a crucial role in preventing American expansion above the 49th parallel.", region: "north-america", eventType: "trade"       },
  { year: 1822, title: "Independence of Brazil", desc: "In 1822, Pedro I declared independence from Portugal, and the War of Independence between Brazil and Portugal lasted four years before Portugal recognized Brazil's independence. The two countries then signed a Treaty of Friendship and Alliance in 1825.", region: "south-america", eventType: "revolution"  },
  { year: 1835, title: "Ottoman Empire Takes Over Libya", desc: "In 1835 the Ottoman Empire took over Libya, which had been ruled by the Karamanli Dynasty since 1711, exploiting an internal dispute that gained momentum. Libya would later fall to Italy in 1912 as the Ottoman Empire weakened, and ultimately gained independence when the UN voted for it in 1952.", region: "africa",        eventType: "colonisation"},
  { year: 1837, title: "Start of the Rebellions of 1837-1838", desc: "Armed uprisings broke out in both Upper and Lower Canada, as rebels led by William Lyon Mackenzie and Louis-Joseph Papineau demanded democratic government reforms and responsible government. The revolts were quickly suppressed but left a lasting mark on the push for self-governance.", region: "north-america", eventType: "revolution"  },
  { year: 1839, title: "The Durham Report", desc: "Lord Durham recommended political reform, including responsible government and the unification of Upper and Lower Canada, proposing that French Canadians be assimilated into a single anglophone-dominated colony. This controversial vision ultimately shaped the future of Canadian governance even as its assimilationist aims largely failed.", region: "north-america", eventType: "politics"   },
  { year: 1841, title: "Act of Union", desc: "Upper and Lower Canada were united into a single entity called the Province of Canada, with Canada West (now Ontario) and Canada East (now Quebec) each granted equal representation despite Canada East's larger population. The arrangement was meant to dilute French Canadian influence but ultimately fueled resentment and political gridlock.", region: "north-america", eventType: "politics"   },
  { year: 1842, title: "Geological Survey of Canada Expeditions", desc: "Founded on April 14, 1842, the Geological Survey of Canada (GSC) was organized to establish the coastline of BC, plan railways, and identify potential mining grounds to power the growing economy. Today the GSC focuses on climate change adaptations like permafrost and groundwater levels, and tracking natural disasters.", region: "north-america", eventType: "science"    },
  { year: 1848, title: "Responsible Government Established", desc: "Nova Scotia became the first British North American colony to achieve responsible government, with the Province of Canada following close behind. This milestone transferred real political authority from appointed governors and councils to elected representatives, laying the foundation for democratic self-rule across British North America.", region: "north-america", eventType: "politics"   },
  { year: 1756, title: "Battle of Plassey", desc: "On June 23, 1757, the British East India Company defeated the Nawab of Bengal at the Battle of Plassey in Palashi, Bengal, India. The Nawab's loss resulted in Mir Jafar being installed as a puppet ruler for the British. This battle transformed the British East India Company from a basic trading group into a powerful political ruler in India.", region: "asia",          eventType: "war"         },
  { year: 1858, title: "Fraser Canyon Gold Rush", desc: "Roughly 30,000 people came to the Fraser Canyon in search of gold and other valuable metals in 1858. The gold rush served as a testing ground for new mining techniques, including the development of hydraulic engineering systems. It also brought thousands of Chinese workers from California and southern China, as well as local Indigenous people who played a major role in building the hydraulic systems.", region: "north-america", eventType: "economy"    },
  { year: 1864, title: "Charlottetown and Quebec Conferences", desc: "Colonial leaders from the Province of Canada, Nova Scotia, New Brunswick, and Prince Edward Island met to draft the foundation for Confederation and the political structure of a united Canadian nation, negotiating the division of powers, representation, and regional interests that would shape the country's founding framework.", region: "north-america", eventType: "politics"   },
  { year: 1864, title: "Start of the War of the Triple Alliance", desc: "Due to territorial disputes, the deadliest inter-state war in South American history was fought for six years between Paraguay and Brazil, with Argentina and Uruguay later joining Brazil's forces. Paraguay lost the conflict and its president Francisco Solano Lopez in 1870. Paraguay was then occupied by Argentine and Brazilian forces until 1876.", region: "south-america", eventType: "war"         },
  { year: 1867, title: "The Meiji Restoration", desc: "Japan abolished its feudal shogunate and restored imperial rule, sparking rapid industrialization and militarization. This allowed Japan to successfully resist Western colonization and become an imperial power itself. The Meiji Restoration built strategic factories, railways, and telegraph lines, causing foreign trade to surge dramatically.", region: "asia",          eventType: "politics"    },
  { year: 1869, title: "Start of the Red River Resistance and Manitoba Act", desc: "Métis leader Louis Riel led a resistance to protect Métis land rights in the Red River region, establishing a provisional government and pressing Ottawa for guarantees on language, religion, and land. The confrontation resulted in the Manitoba Act and the creation of Manitoba as Canada's fifth province in 1870.", region: "north-america", eventType: "revolution"  },
  { year: 1871, title: "British Columbia Joins Confederation", desc: "Canada promised to pay off British Columbia's 1.5 million dollar debt and provide yearly support. BC joined Canada on the condition that a transcontinental railway be built within 10 years to connect it with the East. The colony of British Columbia had been founded in 1858 by Richard Clement Moody, and Governor Anthony Musgrave ran a lengthy campaign to bring it into Confederation.", region: "north-america", eventType: "politics"   },
  { year: 1876, title: "The Indian Act Enacted", desc: "The Canadian government passed the Indian Act, consolidating power over Indigenous status, land administration, and local governance.", region: "north-america", eventType: "indigenous"  },
  { year: 1883, title: "Church of the Savior on Spilled Blood", desc: "Construction began on the Church of the Savior on Spilled Blood in 1883, a memorial monument for Emperor Alexander II. Today it is one of Russia's biggest tourist attractions.", region: "europe",        eventType: "culture"     },
  { year: 1884, title: "Democratic Republic of Congo — Berlin Conference", desc: "In 1885 the General Act of the Berlin Conference on West Africa was signed by major world powers, establishing free trade and river access in the Congo area without any say from the people who originally lived there. Elephants were killed to harvest their ivory tusks, a highly valuable resource used to make items like piano keys.", region: "africa",        eventType: "colonisation"},
  { year: 1885, title: "North-West Rebellion and Completion of the CPR", desc: "A second uprising by Métis and First Nations in present-day Saskatchewan ended in defeat at Batoche; Louis Riel was executed later that year. Shortly after, the Last Spike was driven to complete the Canadian Pacific Railway.", region: "north-america", eventType: "war"         },
  { year: 1874, title: "Fiji Becomes a British Colony", desc: "Fiji became a British colony due to the British government wanting to extend their empire to the Pacific and grow their agricultural industry further, the island was appointed an interim governor (Sir Arthur Gordon) because of mounting financial pressure from other countries and debt piling up. The governor banned the sale of land and Fijian labourers and following the fall of the cotton farms, he brought in other Indian workers to work on new sugar cane farms who could return to India afterwards. This event is significant because the British had income stemming from all the sugarcane plantations in Fiji and also changed the way Fiji worked with the ban of tribal wars, sale of land, and the fijian labourers and afterward when the Indian worker's contracts ended, most of them stayed which created a distinct Indo-Fijian population.", region: "oceania", eventType: "colonisation" },
  { year: 1894, title: "First Sino-Japanese War", desc: "Japan defeated Qing Dynasty China, shifting the regional balance of power in East Asia. In the Treaty of Shimonoseki, which ended the conflict, China recognized the independence of Korea and ceded Taiwan to Japan.", region: "asia",          eventType: "war"         },
  { year: 1700, title: "The Cascadia Earthquake", desc: "On January 26, 1700, an estimated 9.0 magnitude earthquake hit the West Coast of North America. The undersea Cascadia Subduction Zone, an underwater collision of two tectonic plates, created tremendous shaking and a huge tsunami that crushed the Pacific. This created landslides, destroying people's homes and tearing down villages, eventually carrying all the way over to Japan.", region: "north-america", eventType: "science"    },
  { year: 1701, title: "The Great Peace of Montreal", desc: "A historic treaty is signed between New France and 40 First Nations, ending the decades long conflict known as the Beaver Wars and bringing a measure of stability to a region that had been deeply destabilised by years of fighting.", region: "north-america", eventType: "treaty"     },
  { year: 1713, title: "Treaty of Utrecht", desc: "Following the War of the Spanish Succession, France ceded Acadia (mainland Nova Scotia), Newfoundland, and the Hudson Bay region to Great Britain, a significant territorial loss that reshaped the balance of power in North America and laid the groundwork for later struggles between the two empires over control of the continent.", region: "europe",        eventType: "treaty"     },
  { year: 1722, title: "Fall of the Safavid Dynasty", desc: "Afghan rebels invaded Persia and captured the capital, Isfahan, effectively ending Safavid rule and throwing Persia into decades of instability. The collapse changed trade routes connecting Europe, Asia, and India, destabilizing the balance of power between the gunpowder empires of that era — Ottoman, Safavid, and Mughal.", region: "asia",          eventType: "war"         },
  { year: 1755, title: "The Acadian Expulsion", desc: "British authorities forcibly deport thousands of French-speaking Acadian residents from present-day Maritime provinces, uprooting entire communities and scattering families across the American colonies, Britain, and France in a mass displacement that became one of the most devastating and enduring tragedies in Canadian history.", region: "north-america", eventType: "colonisation"},
  { year: 1759, title: "Battle of the Plains of Abraham", desc: "British forces led by General James Wolf defeat the French under General Louis-Joseph de Montcalm on the plains outside Quebec City, a pivotal battle that claimed the lives of both commanders and marked a turning point in the Seven Years' War, effectively shifting control of New France to Britain and setting the stage for the end of French rule in North America.", region: "north-america", eventType: "war"         },
  { year: 1763, title: "Treaty of Paris and the Royal Proclamation", desc: "The Treaty of Paris officially ended the Seven Years' War, ceding New France to Britain, while the Royal Proclamation that followed established the Province of Quebec and formally recognized Indigenous land rights, reshaping the political landscape of North America and setting the terms for British rule.", region: "north-america", eventType: "treaty"     },
  { year: 1792, title: "First European Documentations of Coastal Ecology", desc: "Between 1792 and 1794, hundreds of plants and animals were recorded for potential resources and mapping natural hazards. Captain George Vancouver oversaw the expedition while Scottish botanist Archibald Menzies led the scientific documentation of wildlife and vegetation along the coast. Local Indigenous people guided the researchers, showing how animals behaved and identifying medicinal plants.", region: "north-america", eventType: "science"    },
  { year: 1867, title: "Canadian Confederation", desc: "The British North America Act took effect and the Dominion of Canada was officially formed with four original provinces — Ontario, Quebec, Nova Scotia, and New Brunswick — uniting the colonies under a federal system with its own Parliament, marking the birth of Canada as a self-governing nation within the British Empire.", region: "north-america", eventType: "politics"   },
  { year: 1870, title: "Rupert's Land Transfer", desc: "Canada acquired Rupert's Land and the North-Western Territory from the Hudson's Bay Company, vastly expanding the nation's boundaries westward and northward.", region: "north-america", eventType: "politics"   },
  { year: 1870, title: "The Western Red Cedar as Canvas", desc: "The red cedar tree normally grows up to 60m tall and 8 m in width and the yellow green leaves grow up to 1-2mm long. Its foliage is long, drooping and fern like. It has cones, which are oblong 12-18mm long, tips of which normally have 4 scales rounded with very small prickles. 'The tree of Life' For Indigenous peoples of the west coast, the red cedar has historically provided shelter, canoes, clothing and ceremonial spaces. The tree's maturity has reached up to 350 years but specimens of 1000 years old have been reported.", region: "north-america", eventType: "indigenous" },
  { year: 1873, title: "Prince Edward Island Joins Confederation", desc: "Prince Edward Island joined Canada as the seventh province after receiving federal assistance to pay off railway debts and resolve landlord issues.", region: "north-america", eventType: "politics"   },
  { year: 1879, title: "Diverse Immigrant Faiths", desc: "Thousands of Chinese laborers brought Buddhism and constructed shrines in Victoria and Vancouver's Chinatowns in 1858-1860s. By the late 1890s, the first Sikh immigrants arrived, laying the groundwork for the first Gurdwaras in North America. Confucianism who was founded by scholar Confucius acts as a guide of what would be a normal society and peace amongst humans.", region: "north-america", eventType: "religion"   },
  { year: 1884, title: "The Potlatch Ban", desc: "On April 19 of 1884, Indigenous Peoples were banned from hosting Potlatches (a festival held for weddings, cultural celebrations, and passing on leadership) under the 'Indian Act.' Colonists found it hard to assimilate Indigenous Peoples into European Culture while still practicing their traditions. In 1951, the ban was finally taken down but over the years, many people lost connection to their culture.", region: "north-america", eventType: "indigenous" },
  { year: 1896, title: "The Klondike Gold Rush", desc: "The discovery of gold along the Klondike River led to a massive influx of prospectors, prompting the creation of the Yukon Territory in 1898.", region: "north-america", eventType: "economy"    },
  { year: 1830, title: "London Protocol", desc: "The London Protocol is where the great powers officially recognised Greece as an independent sovereign kingdom. This occurred after Greece won the independence war with the Ottomans.", region: "europe",        eventType: "treaty"     },
];

// ═══════════════════════════════════════════════════════
//  REGION LABELS
//  Maps the region key used in the events array to the
//  human-readable label shown on each card's region tag.
//  If you add a new region, add it here AND in style.css
//  under "Region tags", and add a filter button in index.html.
// ═══════════════════════════════════════════════════════
const regionLabels = {
  "north-america": "North America",
  "europe":        "Europe",
  "asia":          "Asia",
  "south-america": "South America",
  "africa":        "Africa",
  "oceania": "Oceania",
};

// ═══════════════════════════════════════════════════════
//  EVENT TYPE LABELS
//  Maps the eventType key used in the events array to the
//  human-readable label shown on each card's type tag.
//  If you add a new type, add it here AND add a matching
//  .tag-type-yourtype rule in style.css under "Event type tags".
// ═══════════════════════════════════════════════════════
const typeLabels = {
  "war":          "War",
  "politics":     "Politics",
  "exploration":  "Exploration",
  "economy":      "Economy",
  "revolution":   "Revolution",
  "science":      "Science",
  "culture":      "Culture",
  "trade":        "Trade",
  "religion":     "Religion",
  "indigenous":   "Indigenous",
  "colonisation": "Colonisation",
  "treaty":       "Treaty",
};

// ═══════════════════════════════════════════════════════
//  ZOOM STATE
//  zoomLevels — the three CSS classes that set font-size
//    on <main>. All card sizes use em so they scale with it.
//  zoomIndex  — which level is currently active (0/1/2).
//    Starts at 1 (Normal).
// ═══════════════════════════════════════════════════════
const zoomLevels = ["zoom-xs", "zoom-sm", "zoom-md", "zoom-lg", "zoom-xl"];
let zoomIndex = 2; // 0 = Tiny, 1 = Small, 2 = Normal, 3 = Large, 4 = Huge

// Removes whichever zoom class is currently on <main>
// and applies the one matching the current zoomIndex.
// Also updates the text label between the buttons.
function applyZoom() {
  const main = document.querySelector("main");
  main.classList.remove(...zoomLevels);
  main.classList.add(zoomLevels[zoomIndex]);
  document.getElementById("zoom-level").textContent = ["Tiny", "Small", "Normal", "Large", "Huge"][zoomIndex];
  document.querySelectorAll(".zoom-pip").forEach((pip, i) => {
    pip.classList.toggle("active", i === zoomIndex);
  });
}

// Zoom in — increases zoomIndex by 1, capped at the max (2)
document.getElementById("zoom-in").addEventListener("click", () => {
  if (zoomIndex < zoomLevels.length - 1) { zoomIndex++; applyZoom(); }
});

// Zoom out — decreases zoomIndex by 1, floored at 0
document.getElementById("zoom-out").addEventListener("click", () => {
  if (zoomIndex > 0) { zoomIndex--; applyZoom(); }
});

// ═══════════════════════════════════════════════════════
//  RENDER FUNCTION
//  Builds and injects all event cards into #timeline.
//  Called once on page load and again whenever a filter
//  button is clicked.
//
//  filter — the region string to show, or "all" to show
//           every event. Defaults to "all".
// ═══════════════════════════════════════════════════════
function render(filter = "all", typeFilter = "all", yearFrom = null, yearTo = null) {
  const container = document.getElementById("timeline");
  const sorted = [...events].sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

  const visible = sorted.filter(e =>
    (filter === "all" || e.region === filter) &&
    (typeFilter === "all" || e.eventType === typeFilter) &&
    (yearFrom === null || e.year >= yearFrom) &&
    (yearTo === null || e.year <= yearTo)
  );

  document.getElementById("no-results").style.display = visible.length === 0 ? "block" : "none";
  if (visible.length === 0) { container.innerHTML = ""; container.style.height = "0"; return; }

  const sideMap = new Map();
  visible.forEach((e, i) => sideMap.set(e, i % 2 === 0 ? "left" : "right"));

  const items = sorted.map(e => {
    const isHidden =
      (filter !== "all" && e.region !== filter) ||
      (typeFilter !== "all" && e.eventType !== typeFilter) ||
      (yearFrom !== null && e.year < yearFrom) ||
      (yearTo !== null && e.year > yearTo);
    const side = sideMap.get(e) ?? (sorted.indexOf(e) % 2 === 0 ? "left" : "right");
    return { e, isHidden, side };
  });

  container.innerHTML = items.map(({ e, isHidden, side }) => `
    <div class="event event-${side}${isHidden ? " hidden" : ""}" style="top:0px">
      <div class="card">
        <div class="card-year">${e.year}</div>
        <div class="card-title">${e.title}</div>
        <div class="card-desc">${e.desc}</div>
        <div class="tags">
          <span class="tag tag-${e.region}">${regionLabels[e.region]}</span>
          <span class="tag tag-type tag-type-${e.eventType}">${typeLabels[e.eventType]}</span>
        </div>
      </div>
    </div>`
  ).join("");

  const nodes = Array.from(container.querySelectorAll(".event:not(.hidden)"));
  const byLeft  = nodes.filter(n => n.classList.contains("event-left"));
  const byRight = nodes.filter(n => n.classList.contains("event-right"));

  const zoomGaps = [80, 120, 160, 220, 300];
  const GAP = zoomGaps[zoomIndex];
  [byLeft, byRight].forEach(group => {
    let floor = 0;
    group.forEach(node => {
      node.style.top = floor + "px";
      floor += node.offsetHeight + GAP;
    });
  });

  let maxBottom = 0;
  container.querySelectorAll(".event:not(.hidden)").forEach(n => {
    maxBottom = Math.max(maxBottom, parseFloat(n.style.top) + n.offsetHeight);
  });
  container.style.height = (maxBottom + 60) + "px";
}

// ═══════════════════════════════════════════════════════
//  FILTER BUTTON LISTENERS
//  Attaches a click handler to every .filter-btn element.
//  On click:
//    1. Reads the data-region attribute of the clicked button
//    2. Removes the "active" class from all buttons
//    3. Adds "active" to the clicked button (highlights it)
//    4. Re-renders the timeline with the new filter applied
// ═══════════════════════════════════════════════════════
document.getElementById("location-toggle").addEventListener("click", () => {
  document.getElementById("location-filters").classList.toggle("open");
});

document.getElementById("type-toggle").addEventListener("click", () => {
  document.getElementById("type-filters").classList.toggle("open");
});

let activeFilter = "all";
let activeType = "all";

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    activeFilter = btn.dataset.region;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    rerender();
  });
});

document.querySelectorAll(".filter-type-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    activeType = btn.dataset.type;
    document.querySelectorAll(".filter-type-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    rerender();
  });
});

function getYearInputs() {
  const from = parseInt(document.getElementById("year-from").value) || null;
  const to   = parseInt(document.getElementById("year-to").value)   || null;
  return { from, to };
}

function rerender() {
  const { from, to } = getYearInputs();
  render(activeFilter, activeType, from, to);
}

document.getElementById("year-from").addEventListener("input", rerender);
document.getElementById("year-to").addEventListener("input", rerender);

// ── Initial page load ────────────────────────────────
// Render all events and apply the default zoom level
// as soon as the script runs.
// ── Hide/show header tied directly to scroll position ──
const header = document.querySelector("header");
let lastScroll = 0;
let headerOffset = 0;

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  const delta = current - lastScroll;
  const headerH = header.offsetHeight;

  headerOffset = Math.min(0, Math.max(-headerH, headerOffset - delta));

  const progress = -headerOffset / headerH; // 0 = fully visible, 1 = fully hidden
  header.style.transform = `translateY(${headerOffset}px)`;
  header.style.opacity = 1 - progress * 0.8;

  lastScroll = current;
});

render();
applyZoom();
