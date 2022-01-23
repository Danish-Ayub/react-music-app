import { v4 as uuidv4 } from "uuid";

const ChillHop = () => {
    return [
        {
            name: "There and Back",
            artist: "shopan",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10311",
            color: ["#9779B0", "#CCB3C9"],
            id: uuidv4(),
            active: true,
        },
        {
            name: "Rewind",
            artist: "SwuM",
            cover: "https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
            color: ["#232432", "#775650"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "la zona",
            artist: "Maydee",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27455",
            color: ["#9AB1C8", "#632F23"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Hung Up",
            artist: "Ezzy",
            cover: "https://chillhop.com/wp-content/uploads/2021/09/dc49d7971512be0192848d072efdaaab91a4c73c-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=24699",
            color: ["#CD4646", "#F9DEA9"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Soulsounds",
            artist: "Parkbench Epiphany",
            cover: "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
            color: ["#FB9B9F", "#303F4E"],
            id: uuidv4(),
            active: false,
        },
        {
            name: "Snowstalgia",
            artist: "invention_",
            cover: "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=10305",
            color: ["#9779B0", "#CCB3C9"],
            id: uuidv4(),
            active: false,
        },
    ];
}

export default ChillHop;