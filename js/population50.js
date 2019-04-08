var population = {
    "generation": 72,
    "population": [
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": 0.026769698046417295,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.24612881524257535,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.5178090441356975,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.9600328196820893,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.121515228549163,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.5489058004228164,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.5175211473072556,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.0202226621743975,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.1253551158749096,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.8466484734326745,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.727167161178154,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.1304583367807215,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.59464875494293,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.458412289612256,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.5776945158611824,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.09813647775461548,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 1.7834887651942877,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.228144618479618,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8189883683713761,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.0000104642621643,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": 0.10203784191742193,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1251918112630133,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.178269222211422,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.709148444284433,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.5704691164946878,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.036344751039043,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.925242321768775,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.7577927333201826,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.007196197861286752,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.8016706538616853,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.0501839330025522,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.18841561701990095,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.6940714175526397,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.5214023277616695,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.5001140191656894,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.09696728852816797,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 1.5765013948222064,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.0233460218857529,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.022541868757532,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.0548986793912505,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6936563092886994,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.338822932574747,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 0.09211543075400908,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.3131683472958988,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.9925478329063724,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.354130584837753,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.483268910954883,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.4853419009170175,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.944126133916387,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6927413278905554,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": 0.021545717200537856,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7542471821705714,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.41900498045697,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.099640074640239,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.9096105545419704,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.8921599300510303,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.44455049887518516,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.26531756172218124,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.2915076173996223,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.1597941564843364,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.01580500282622825,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.00901312667334464,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.6370653405690767,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.9441939395796632,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3043533209209883,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.7170688268674983,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.287572591910199,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.0403293393115396,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.3964780190568904,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8104993334035653,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.18586305591956975,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.8006512884534853,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7685555466100187,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.771534754998771,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.434907481755861,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8310003751908726,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.733739594915529,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 1.392356330730606,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.579965420400396,
                    "from": 0,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": 0.10203784191742193,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.4853419009170175,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": -0.1451894998827094,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.4853419009170175,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.8750755835765287,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.586537286811588,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3239678844051146,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.8750755835765287,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": 0.10203784191742193,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.586537286811588,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.075992033304864,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": 0.10203784191742193,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.332691287402356,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.586537286811588,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": 0.10203784191742193,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.586537286811588,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.4853419009170175,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.9695119605869553,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.8750755835765287,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.4853419009170175,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.944126133916387,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.01896881879957371,
                    "type": "hidden",
                    "squash": "SOFTSIGN",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                },
                {
                    "bias": -0.9695119605869553,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 10
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 9,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 10,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.586537286811588,
                    "from": 4,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 10,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": -0.08119318042148063,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.0002556272315293179,
                    "from": 8,
                    "to": 9,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3239678844051146,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3239678844051146,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.834253286558878,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.944126133916387,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": 0.10203784191742193,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.06964596657164833,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.004495495840208447,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.7791250131904626,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.4853419009170175,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.944126133916387,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.075992033304864,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": 8
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": 9
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8109386676714259,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        }
    ],
    "maxScore": 779,
    "bestGenome": {
        "genome": {
            "nodes": [
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 0
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 1
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 2
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 3
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 4
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 5
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 6
                },
                {
                    "bias": 0,
                    "type": "input",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 7
                },
                {
                    "bias": -0.746361230281442,
                    "type": "output",
                    "squash": "LOGISTIC",
                    "mask": 1,
                    "index": 8
                },
                {
                    "bias": -0.2714421946144434,
                    "type": "output",
                    "squash": "BIPOLAR_SIGMOID",
                    "mask": 1,
                    "index": 9
                }
            ],
            "connections": [
                {
                    "weight": 0.02930233677078259,
                    "from": 8,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.035655556844572306,
                    "from": 9,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.8935577552241023,
                    "from": 7,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.3650516403130677,
                    "from": 6,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.7256094244667057,
                    "from": 7,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 2.389881753830598,
                    "from": 5,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.8563018866020595,
                    "from": 6,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.6960347539212073,
                    "from": 4,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 4.368495129585382,
                    "from": 5,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 1.3274398316426836,
                    "from": 3,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3151891757311382,
                    "from": 4,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.297791286656021,
                    "from": 2,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 3.1858889682613984,
                    "from": 3,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 4.356309755771116,
                    "from": 1,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 2.3878327485004327,
                    "from": 2,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 3.3036119264292374,
                    "from": 0,
                    "to": 9,
                    "gater": null
                },
                {
                    "weight": 0.8420055136789766,
                    "from": 1,
                    "to": 8,
                    "gater": null
                },
                {
                    "weight": 0.8052620395026713,
                    "from": 0,
                    "to": 8,
                    "gater": null
                }
            ],
            "input": 8,
            "output": 2,
            "dropout": 0
        },
        "conditions": {
            "OBSTACLES_AMOUNT": 12,
            "DETECTION_RADIUS": 250,
            "INPUTS_SIZE": 8,
            "OBSTACLE_SPEED": 140,
            "SHIP_SPEED": 240,
            "SHIP_ANGULAR_SP": 720
        }
    },
    "learningConditions": {
        "OBSTACLES_AMOUNT": 12,
        "DETECTION_RADIUS": 250,
        "INPUTS_SIZE": 8,
        "OBSTACLE_SPEED": 140,
        "SHIP_SPEED": 240,
        "SHIP_ANGULAR_SP": 720
    }
}