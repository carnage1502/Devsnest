import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "Carnagee",
    password: "carnage_1234",
    boxes: [],
  });

  const generateMeme = async () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });

    let res = await fetch(url);
    let data = await res.json();

    if (data.success === true) {
      setMeme({ ...meme, url: data.data.url });
    } else {
      alert("Write Something!");
    }
  };

  return (
    <div className="meme">
      <img src={meme.url} alt="Memes" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>
      <div>
        <button onClick={generateMeme}>Create Meme</button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
};

export default Meme;