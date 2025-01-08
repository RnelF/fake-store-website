"use client";
import React from "react";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245", "rgb(1,245,13"]
  );
  return (
    <div>
      <motion.div
        style={{
          //scaleX: scrollYProgress,
          scaleX,
          //background: "blue",
          background,
          transformOrigin: "left",
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
      ></motion.div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam porttitor
        tincidunt dictum. Etiam eget turpis elementum, varius sapien sed, rutrum
        lorem. Nullam volutpat volutpat risus, sed ultricies sapien fermentum
        et. Ut finibus et tortor vitae elementum. Donec nec luctus turpis. Morbi
        egestas auctor pharetra. Nulla in est enim. Ut id velit consequat,
        egestas ex eu, mattis lacus. In porta non ante eget placerat.
        Suspendisse vitae luctus lectus. Phasellus tincidunt non turpis vel
        aliquam. Mauris ullamcorper sapien metus, in luctus enim consequat sit
        amet. Vivamus congue ut erat at dictum. Proin ultricies elit in leo
        aliquet rhoncus. Duis eu auctor eros. Fusce euismod faucibus enim, in
        scelerisque arcu egestas sit amet. Morbi viverra sem non vestibulum
        imperdiet. Phasellus enim metus, porttitor et neque gravida, ultrices
        rhoncus orci. Duis pellentesque eget urna sit amet sollicitudin.
        Maecenas eleifend turpis ac luctus varius. Nam et tortor quis justo
        faucibus sollicitudin quis id nisi. Pellentesque vitae laoreet lorem.
        Cras et egestas justo. Integer egestas nibh nisi, sit amet hendrerit
        neque consequat ac. Nulla eu rhoncus ligula. Ut eget semper purus. Cras
        facilisis sed nisl ac tincidunt. Aenean hendrerit, eros et sagittis
        mattis, odio lacus egestas leo, ac vestibulum massa felis eget purus.
        Proin nec iaculis lorem. Etiam consequat tincidunt magna in ultricies.
        Aliquam tortor purus, pharetra at elit sit amet, posuere bibendum mi.
        Maecenas mollis lacinia massa. Pellentesque varius, felis sit amet
        varius tristique, nibh mi cursus sapien, a tincidunt tortor quam sit
        amet elit. Nulla feugiat aliquam ligula, in semper nulla fringilla sit
        amet. Nam in tellus sed nisl vulputate lobortis a non lectus. Cras orci
        tellus, posuere sit amet neque nec, mattis pretium urna. In tempus
        tortor id ante sodales fringilla. Aliquam nec molestie ipsum, a
        efficitur enim. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus. Etiam sit amet convallis ante. Nulla
        pellentesque augue eget diam sodales ornare. Sed porttitor, risus non
        vehicula tempor, erat magna luctus mauris, non fermentum neque orci
        feugiat eros. Aliquam non lectus congue tortor pharetra malesuada.
        Vestibulum quis elementum orci, iaculis posuere quam. Aenean
        pellentesque condimentum lorem, id laoreet nisi euismod molestie. Duis
        quis justo non est tristique sollicitudin ut sit amet urna. Nullam ac
        nisi non dui blandit lacinia. Nullam vel turpis pretium tellus rutrum
        sodales id eget ante. Quisque ullamcorper ligula est, vulputate accumsan
        neque sodales nec. Maecenas tincidunt aliquam nibh, eu lacinia purus
        pretium ac. Nulla tincidunt consequat facilisis. Maecenas pellentesque
        fringilla mi sit amet viverra. Morbi accumsan, leo sit amet tincidunt
        vulputate, nulla ante suscipit nulla, at hendrerit lectus sem id nunc.
        Cras euismod justo sapien, vitae molestie velit aliquam ac. Proin nec
        risus nec nibh lobortis facilisis. Vestibulum mollis leo ac nisi
        lacinia, id accumsan velit laoreet. In leo elit, feugiat vel finibus at,
        vehicula ac ligula. Mauris vitae scelerisque magna. Nunc euismod nec
        risus sit amet cursus. Donec cursus scelerisque ante venenatis
        tristique. Aenean molestie imperdiet felis. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Sed vel orci
        ut nunc elementum rhoncus id euismod leo. Sed consectetur eros at nibh
        tincidunt, a euismod arcu sodales. Morbi malesuada arcu sem, sed feugiat
        massa mollis non. Donec fermentum hendrerit augue quis cursus. Donec
        condimentum, mi nec tristique mattis, lorem augue suscipit purus, mattis
        sodales turpis leo eu nulla. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Duis neque
        tellus, malesuada sed porttitor non, hendrerit sit amet elit. In hac
        habitasse platea dictumst. Suspendisse blandit nisl nec nisi
        pellentesque malesuada at non tortor. Morbi id ex eu odio scelerisque
        blandit ac sit amet nisi. Nullam efficitur justo tellus, eget efficitur
        orci malesuada et. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Nulla hendrerit nec mi sed efficitur.
        Donec sed vestibulum diam, in convallis ante. Aenean non porta metus.
        Integer suscipit, lacus eu volutpat finibus, eros arcu pellentesque
        metus, nec elementum elit ligula a felis. Nulla vel lectus ante. Ut in
        cursus erat, nec sollicitudin metus. Quisque ut diam suscipit, porttitor
        ante et, mattis turpis. Praesent efficitur ac nunc volutpat auctor.
        Nullam bibendum est ac arcu dictum, nec tincidunt risus pulvinar. Donec
        in ex id orci imperdiet lobortis. Mauris ornare urna in neque tempor,
        sodales fringilla velit porta. Quisque blandit ligula nec aliquam
        suscipit. Proin eget orci id risus auctor fringilla vitae ullamcorper
        leo. Quisque risus massa, semper a justo nec, ultrices ultricies dui.
        Praesent mollis egestas enim, vitae dignissim tortor efficitur vitae.
        Etiam sed euismod eros. Donec interdum sollicitudin eros vitae posuere.
        In lobortis, dui nec consequat eleifend, eros justo lacinia felis, vel
        imperdiet lectus ante vitae nibh. Curabitur accumsan eget odio eu
        bibendum. Nam libero erat, aliquam sit amet tortor sed, imperdiet
        blandit neque. In eget iaculis ipsum, non tincidunt mi. Sed faucibus
        laoreet auctor. Aenean et magna ligula. Vestibulum lacinia euismod nunc
        eget elementum. Donec congue lectus vehicula tortor commodo, vitae
        pulvinar velit viverra. Nunc et bibendum leo. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        In commodo, turpis vitae malesuada efficitur, risus tellus maximus
        turpis, nec dignissim ex lacus ut nibh. Nunc eleifend, mi a accumsan
        elementum, lacus quam malesuada metus, euismod semper nunc nulla in
        nisi. Quisque viverra interdum ligula, at cursus arcu. Mauris ligula
        purus, vulputate vitae bibendum sed, tempus eget libero. Donec tempus
        metus nec augue dignissim congue. Nullam non ultrices dolor. Aliquam
        iaculis leo sed sapien fermentum vulputate. Nulla semper ante et lorem
        scelerisque lobortis. Donec tempor tellus id efficitur fermentum.
        Phasellus sit amet fermentum mi, vel sagittis metus. Donec in nulla vel
        nulla imperdiet vulputate. Curabitur ornare ipsum sit amet mauris
        ultricies feugiat. Aliquam congue porta nulla, sed lacinia ipsum
        accumsan et. Ut vitae tincidunt magna, quis ornare odio. Pellentesque
        vitae tortor at odio consequat tincidunt eu in lectus. Nunc at tempor
        elit. Integer euismod ultricies dui, sed imperdiet purus semper et.
      </div>
    </div>
  );
}
