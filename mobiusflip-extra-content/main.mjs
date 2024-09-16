Hooks.once("init", function(){
    CONFIG.DND5E.abilityActivationTypes.either = "Action or Bonus Action";
    CONFIG.DND5E.abilityActivationTypes.attack = "Attack";
    CONFIG.DND5E.featureTypes.technique = {
        label: "Martial Technique",
        subtypes: {
            agility: "Agility",
            archery: "Archery",
            brawling: "Brawling",
            defense: "Defense",
            dueling: "Dueling",
            greatWeaponry: "Great Weaponry",
            lightWeaponry: "Light Weaponry",
            obstruction: "Obstruction",
            protection: "Protection",
            vigilance: "Vigilance"
        }
    };
    CONFIG.DND5E.featureTypes.class.subtypes.marshalTactic = "Tactic";
    CONFIG.DND5E.featureTypes.class.subtypes.marshalOrder = "Order";
    CONFIG.DND5E.featureTypes.class.subtypes.rogueDeviousStrike = "Devious Strike";
    CONFIG.DND5E.featureTypes.class.subtypes.monkIdealSelf = "Ideal Self";

    // Mage Hand Press options
    CONFIG.DND5E.featureTypes.class.subtypes.alchemistBombFormula = "Bomb Formula";
    CONFIG.DND5E.featureTypes.class.subtypes.alchemistDiscovery = "Discovery";
    CONFIG.DND5E.featureTypes.class.subtypes.channelerPlanarFocus = "Planar Focus";
    CONFIG.DND5E.featureTypes.class.subtypes.gunslingerDeed = "Deed";
    CONFIG.DND5E.featureTypes.class.subtypes.investigatorTrinket = "Trinket";
    CONFIG.DND5E.featureTypes.class.subtypes.wardenSentinelsStand = "Sentinel's Stand";
    CONFIG.DND5E.featureTypes.class.subtypes.wardenSentinelsStep = "Sentinel's Step";
    CONFIG.DND5E.featureTypes.class.subtypes.wardenSentinelsSoul = "Sentinel's Soul";
    CONFIG.DND5E.featureTypes.class.subtypes.warmageTrick = "Warmage Trick";
    CONFIG.DND5E.featureTypes.class.subtypes.witchCurse = "Curse";
    CONFIG.DND5E.featureTypes.class.subtypes.witchHex = "Hex";
    CONFIG.DND5E.featureTypes.class.subtypes.witchGrandHex = "Grand Hex";
})