import React, { FC } from "react";

const TogelItem: FC<{ lastColItems: string }> = ({ lastColItems }) => {
  return (
    <>
      <div className={`p-2 ${lastColItems === "1" ? "active" : "d-none"}`}>
        <h1>Right Column 1</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate
        voluptates nihil exercitationem, eveniet quasi, maiores nulla voluptatum
        ipsum impedit magnam alias, excepturi totam. Sit corporis earum
        voluptatum aut soluta. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis ut, error, fugiat expedita officiis recusandae
        rem veniam perferendis necessitatibus, quos nisi perspiciatis eum
        voluptate ea? Sint quas recusandae voluptatem. Hic laudantium, porro
        eveniet provident sint ipsum accusantium culpa exercitationem ducimus
        minus tempora magni sit, modi perferendis possimus reprehenderit id?
        <br />
        <br />
        Tempore, ratione, eveniet aliquam ullam itaque dolorem quas corrupti,
        molestiae doloremque laboriosam unde vel porro! Unde sed expedita ullam
        excepturi veritatis exercitationem fugiat quas, culpa beatae ratione
        libero, quae illum aperiam consectetur possimus nihil quasi autem, rerum
        magnam corporis voluptate pariatur id doloribus non! Perferendis placeat
        dicta at, repudiandae animi voluptas, eius sapiente fugit, ratione
        provident numquam dignissimos asperiores. Distinctio atque illo sunt
        delectus! Reprehenderit voluptas, molestias quisquam quibusdam amet modi
        explicabo reiciendis sint blanditiis inventore, officiis temporibus
        exercitationem pariatur asperiores repudiandae repellendus vel quod.
        Quibusdam ab architecto optio repellat! Nostrum saepe eaque nesciunt eum
        consectetur nam aut soluta quaerat dignissimos?
      </div>
      <div className={`p-2 ${lastColItems === "2" ? "active" : "d-none"}`}>
        <h1>Right Column 2</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate
        voluptates nihil exercitationem, eveniet quasi, maiores nulla voluptatum
        ipsum impedit magnam alias, excepturi totam. Sit corporis earum
        voluptatum aut soluta. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis ut, error, fugiat expedita officiis recusandae
        rem veniam perferendis necessitatibus, quos nisi perspiciatis eum
        voluptate ea? Sint quas recusandae voluptatem. Hic laudantium, porro
        eveniet provident sint ipsum accusantium culpa exercitationem ducimus
        minus tempora magni sit, modi perferendis possimus reprehenderit id?
        <br />
        <br />
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
        facere tempore cupiditate ratione reprehenderit soluta dicta minus,
        culpa numquam nesciunt! Eius vel, similique totam tempore consectetur
        officiis cumque delectus ipsa consequuntur deserunt, aspernatur
        asperiores a voluptates modi placeat, provident tempora. Quibusdam alias
        voluptates quae est at id pariatur praesentium expedita adipisci nobis
        illo laudantium hic eveniet, ut et corporis dolore fuga aspernatur
        dolorum aut esse ab ea nulla! Maxime nam, consequatur deserunt
        repellendus alias, eligendi praesentium perferendis ex omnis, cum
        tempora porro qui magni possimus dolores. Reprehenderit aliquam saepe in
        quaerat voluptatem ea eum nihil aut qui ex. A dolor tempore cum, iure
        blanditiis molestias sint provident, aut laudantium voluptatum suscipit
        explicabo autem? Sequi ducimus voluptate cum inventore maiores, quasi
        quibusdam distinctio suscipit sed. Distinctio sapiente, numquam
        repellendus facilis aperiam molestiae ipsum libero quo doloremque eos
        quisquam quam minima voluptatum, culpa dolore illo nulla voluptas
        doloribus vitae maiores! Quam, hic?
      </div>
      <div className={`p-2 ${lastColItems === "3" ? "active" : "d-none"}`}>
        <h1>Right Column 3</h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius voluptate
        voluptates nihil exercitationem, eveniet quasi, maiores nulla voluptatum
        ipsum impedit magnam alias, excepturi totam. Sit corporis earum
        voluptatum aut soluta. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quis ut, error, fugiat expedita officiis recusandae
        rem veniam perferendis necessitatibus, quos nisi perspiciatis eum
        voluptate ea? Sint quas recusandae voluptatem. Hic laudantium, porro
        eveniet provident sint ipsum accusantium culpa exercitationem ducimus
        minus tempora magni sit, modi perferendis possimus reprehenderit id?
      </div>
    </>
  );
};

export default TogelItem;
