import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function eventFnc() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    scrub: 3,
  });
  gsap.to(".sec1Img", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".section01",
      start: "top top",
      end: "bottom center",
    },
  });

  gsap.to(".Bwireframe", 3, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".Swireframe", 2, {
    y: 30,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurImg1", {
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".section01",
      start: "top top",
      end: "bottom center",
    },
  });

  gsap.to(".blurCntl7", 2, {
    y: 30,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurCntl8", 3, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".onehand", {
    opacity: 1,
    x: -250,
    y: 170,
    scrollTrigger: {
      trigger: ".section01",
      start: "top top",
      end: "bottom center",
    },
  });

  gsap.to(".moveCercle", {
    opacity: 1,
    y: 200,
    scrollTrigger: {
      trigger: ".section01",
      start: "top top",
      end: "bottom center",
    },
  });

  // section02

  gsap.to(".blurImg1", {
    opacity: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section03",
      start: "top top",
      end: "bottom center",
      duration: 1,
    },
  });

  gsap.to(".onehand", {
    opacity: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section03",
      start: "top top",
      end: "bottom center",
    },
  });

  gsap.to(".moveCercle", {
    opacity: 0,
    immediateRender: false,
    scrollTrigger: {
      trigger: ".section03",
      start: "top top",
      end: "bottom center",
    },
  });

  // section03

  gsap.to(".cubeImg", {
    opacity: 1,
    scrollTrigger: {
      trigger: ".section03",
      start: "center bottom",
      end: "bottom bottom",
    },
  });

  gsap.to(".P3gauge", {
    width: 200,
    scrollTrigger: {
      trigger: ".section03",
      start: "top center",
      end: "top top",
    },
  });

  // section04

  gsap.to(".P4gauge", {
    width: 200,
    scrollTrigger: {
      trigger: ".section04",
      start: "top center",
      end: "top top",
    },
  });

  gsap.to(".cubeImg", 2, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurImg2", {
    opacity: 0.5,
    scrollTrigger: {
      trigger: ".section06",
      start: "top center",
      end: "top top",
    },
  });

  // section06

  gsap.to(".blurCntl1", 3, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurCntl2", 2, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurCntl3", 3, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurCntl4", 2, {
    y: 30,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurCntl5", 3, {
    y: 50,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  gsap.to(".blurCntl6", 3, {
    y: -30,
    repeat: -1,
    yoyo: true,
    ease: "Power1.easeInOut",
  });

  //  text event

  //  subCanvas
  gsap.to(".Futuristic", {
    yPercent: -100,
    xPercent: -80,
    scrollTrigger: {
      trigger: ".section04",
      start: "top bottom",
      end: "top top",
    },
  });

  gsap.to(".Personalized", {
    yPercent: -100,
    xPercent: 80,
    scrollTrigger: {
      trigger: ".section04",
      start: "top bottom",
      end: "top top",
    },
  });

  gsap.to(".Convenient", {
    yPercent: 80,
    xPercent: -80,
    scrollTrigger: {
      trigger: ".section04",
      start: "top bottom",
      end: "top top",
    },
  });

  gsap.to(".Connecting", {
    yPercent: 80,
    xPercent: 80,
    scrollTrigger: {
      trigger: ".section04",
      start: "top bottom",
      end: "top top",
    },
  });
}
