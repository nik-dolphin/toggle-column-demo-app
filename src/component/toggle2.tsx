import React, { FC } from "react";

const Toggle2: FC<{ firstColVisible: any }> = ({ firstColVisible }) => {
  return (
    <>
      <div className="container-fluid d-flex justify-content-around">
        <p className={`p-2 ${firstColVisible === "2" ? "active" : "d-none"}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          cupiditate officia. Voluptatum qui ratione laborum, autem, ad saepe,
          maxime asperiores natus commodi ipsa sequi sunt delectus atque numquam
          odit perferendis. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Recusandae corrupti, nihil quis sint perspiciatis eaque
          consequuntur dolorem odio debitis saepe facere labore eligendi
          voluptates voluptatum tempora corporis deserunt accusamus nam in fugit
          molestias! Libero voluptatum aperiam odio provident totam saepe
          numquam nisi debitis tempore reprehenderit vero illo deleniti
          veritatis eaque quis alias deserunt delectus iure, nobis sit corporis
          odit asperiores quidem. Neque modi officia, possimus et aut minima
          doloribus, ipsum, nisi dolor quae iusto numquam. Ut saepe, quidem
          fugit tenetur, magni soluta quasi quibusdam odit tempora quo impedit
          enim consequuntur vitae nihil minima sint asperiores ex laborum
          perferendis voluptas. Magni nam labore necessitatibus itaque et ullam
          fugit aspernatur cumque repudiandae ex tempore veritatis officia, eius
          voluptates accusamus voluptate ab reprehenderit unde error nihil!
        </p>
      </div>
    </>
  );
};

export default Toggle2;
