import RuneEl from '../../images/Runes/el_rune.png';
import RuneEld from '../../images/Runes/eld_rune.png';
import RuneTir from '../../images/Runes/tir_rune.png';
import RuneNef from '../../images/Runes/nef_rune.png';
import RuneEth from '../../images/Runes/eth_rune.png';
import RuneIth from '../../images/Runes/ith_rune.png';
import RuneTal from '../../images/Runes/tal_rune.png';
import RuneRal from '../../images/Runes/ral_rune.png';
import RuneOrt from '../../images/Runes/ort_rune.png';
import RuneThul from '../../images/Runes/thul_rune.png';
import RuneAmn from '../../images/Runes/amn_rune.png';
import RuneSol from '../../images/Runes/sol_rune.png';
import RuneShael from '../../images/Runes/shael_rune.png';
import RuneDol from '../../images/Runes/dol_rune.png';
import RuneHel from '../../images/Runes/hel_rune.png';
import RuneIo from '../../images/Runes/io_rune.png';
import RuneLum from '../../images/Runes/lum_rune.png';
import RuneKo from '../../images/Runes/ko_rune.png';
import RuneFal from '../../images/Runes/fal_rune.png';
import RuneLem from '../../images/Runes/lem_rune.png';
import RunePul from '../../images/Runes/pul_rune.png';
import RuneUm from '../../images/Runes/um_rune.png';
import RuneMal from '../../images/Runes/mal_rune.png';
import RuneIst from '../../images/Runes/ist_rune.png';
import RuneGul from '../../images/Runes/gul_rune.png';
import RuneVex from '../../images/Runes/vex_rune.png';
import RuneOhm from '../../images/Runes/ohm_rune.png';
import RuneLo from '../../images/Runes/lo_rune.png';
import RuneSur from '../../images/Runes/sur_rune.png';
import RuneBer from '../../images/Runes/ber_rune.png';
import RuneJah from '../../images/Runes/jah_rune.png';
import RuneCham from '../../images/Runes/cham_rune.png';
import RuneZod from '../../images/Runes/zod_rune.png';

import ChippedTopaz from '../../images/Gems/chipped_topaz.png';
import ChippedAmethyst from '../../images/Gems/chipped_amethyst.png';
import ChippedSapphire from '../../images/Gems/chipped_sapphire.png';
import ChippedRuby from '../../images/Gems/chipped_ruby.png';
import ChippedEmerald from '../../images/Gems/chipped_emerald.png';
import ChippedDiamond from '../../images/Gems/chipped_diamond.png';
import FlawedTopaz from '../../images/Gems/flawed_topaz.png';
import FlawedAmethyst from '../../images/Gems/flawed_amethyst.png';
import FlawedSapphire from '../../images/Gems/flawed_sapphire.png';
import FlawedRuby from '../../images/Gems/flawed_ruby.png';
import FlawedEmerald from '../../images/Gems/flawed_emerald.png';
import FlawedDiamond from '../../images/Gems/flawed_diamond.png';
import Topaz from '../../images/Gems/topaz.png';
import Amethyst from '../../images/Gems/amethyst.png';
import Sapphire from '../../images/Gems/sapphire.png';
import Ruby from '../../images/Gems/ruby.png';
import Emerald from '../../images/Gems/emerald.png';
import Diamond from '../../images/Gems/diamond.png';
import FlawlessTopaz from '../../images/Gems/flawless_topaz.png';
import FlawlessAmethyst from '../../images/Gems/flawless_amethyst.png';
import FlawlessSapphire from '../../images/Gems/flawless_sapphire.png';
import FlawlessRuby from '../../images/Gems/flawless_ruby.png';
import FlawlessEmerald from '../../images/Gems/flawless_emerald.png';

interface Rune {
    image: any;
    runes: string[];
    gem?: {
        name: string;
        image: any;
    };
}

const runeAssets: Record<string, Rune> = {
    El: {
        image: RuneEl,
        runes: [],
        gem: undefined
    },
    Eld: {
        image: RuneEld,
        runes: ["El", "El", "El"],
        gem: undefined
    },
    Tir: {
        image: RuneTir,
        runes: ["Eld", "Eld", "Eld"],
        gem: undefined
    },
    Nef: {
        image: RuneNef,
        runes: ["Tir", "Tir", "Tir"],
        gem: undefined
    },
    Eth: {
        image: RuneEth,
        runes: ["Nef", "Nef", "Nef"],
        gem: undefined
    },
    Ith: {
        image: RuneIth,
        runes: ["Eth", "Eth", "Eth"],
        gem: undefined
    },
    Tal: {
        image: RuneTal,
        runes: ["Ith", "Ith", "Ith"],
        gem: undefined
    },
    Ral: {
        image: RuneRal,
        runes: ["Tal", "Tal", "Tal"],
        gem: undefined
    },
    Ort: {
        image: RuneOrt,
        runes: ["Ral", "Ral", "Ral"],
        gem: undefined
    },
    Thul: {
        image: RuneThul,
        runes: ["Ort", "Ort", "Ort"],
        gem: undefined
    },
    Amn: {
        image: RuneAmn,
        runes: ["Thul", "Thul", "Thul"],
        gem: {
            name: 'Chipped Topaz',
            image: ChippedTopaz
        }
    },
    Sol: {
        image: RuneSol,
        runes: ["Amn", "Amn", "Amn"],
        gem: {
            name: 'Chipped Amethyst',
            image: ChippedAmethyst
        }
    },
    Shael: {
        image: RuneShael,
        runes: ["Sol", "Sol", "Sol"],
        gem: {
            name: 'Chipped Sapphire',
            image: ChippedSapphire
        }
    },
    Dol: {
        image: RuneDol,
        runes: ["Shael", "Shael", "Shael"],
        gem: {
            name: 'Chipped Ruby',
            image: ChippedRuby
        }
    },
    Hel: {
        image: RuneHel,
        runes: ["Dol", "Dol", "Dol"],
        gem: {
            name: 'Chipped Emerald',
            image: ChippedEmerald
        }
    },
    Io: {
        image: RuneIo,
        runes: ["Hel", "Hel", "Hel"],
        gem: {
            name: 'Chipped Diamond',
            image: ChippedDiamond
        }
    },
    Lum: {
        image: RuneLum,
        runes: ["Io", "Io", "Io"],
        gem: {
            name: 'Flawed Topaz',
            image: FlawedTopaz
        }
    },
    Ko: {
        image: RuneKo,
        runes: ["Lum", "Lum", "Lum"],
        gem: {
            name: 'Flawed Amethyst',
            image: FlawedAmethyst
        }
    },
    Fal: {
        image: RuneFal,
        runes: ["Ko", "Ko", "Ko"],
        gem: {
            name: 'Flawed Sapphire',
            image: FlawedSapphire
        }
    },
    Lem: {
        image: RuneLem,
        runes: ["Fal", "Fal", "Fal"],
        gem: {
            name: 'Flawed Ruby',
            image: FlawedRuby
        }
    },
    Pul: {
        image: RunePul,
        runes: ["Lem", "Lem", "Lem"],
        gem: {
            name: 'Flawed Emerald',
            image: FlawedEmerald
        }
    },
    Um: {
        image: RuneUm,
        runes: ["Pul", "Pul"],
        gem: {
            name: 'Flawed Diamond',
            image: FlawedDiamond
        }
    },
    Mal: {
        image: RuneMal,
        runes: ["Um", "Um"],
        gem: {
            name: 'Topaz',
            image: Topaz
        }
    },
    Ist: {
        image: RuneIst,
        runes: ["Mal", "Mal"],
        gem: {
            name: 'Amethyst',
            image: Amethyst
        }
    },
    Gul: {
        image: RuneGul,
        runes: ["Ist", "Ist"],
        gem: {
            name: 'Sapphire',
            image: Sapphire
        }
    },
    Vex: {
        image: RuneVex,
        runes: ["Gul", "Gul"],
        gem: {
            name: 'Ruby',
            image: Ruby
        }
    },
    Ohm: {
        image: RuneOhm,
        runes: ["Vex", "Vex"],
        gem: {
            name: 'Emerald',
            image: Emerald
        }
    },
    Lo: {
        image: RuneLo,
        runes: ["Ohm", "Ohm"],
        gem: {
            name: 'Diamond',
            image: Diamond
        }
    },
    Sur: {
        image: RuneSur,
        runes: ["Lo", "Lo"],
        gem: {
            name: 'Flawless Topaz',
            image: FlawlessTopaz
        }
    },
    Ber: {
        image: RuneBer,
        runes: ["Sur", "Sur"],
        gem: {
            name: 'Flawless Amethyst',
            image: FlawlessAmethyst
        }
    },
    Jah: {
        image: RuneJah,
        runes: ["Ber", "Ber"],
        gem: {
            name: 'Flawless Sapphire',
            image: FlawlessSapphire
        }
    },
    Cham: {
        image: RuneCham,
        runes: ["Jah", "Jah"],
        gem: {
            name: 'Flawless Ruby',
            image: FlawlessRuby
        }
    },
    Zod: {
        image: RuneZod,
        runes: ["Cham", "Cham"],
        gem: {
            name: 'Flawless Emerald',
            image: FlawlessEmerald
        }
    },
};

export default runeAssets;