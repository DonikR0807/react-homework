import useEmblaCarousel from "embla-carousel-react";
import { ReactNode, useCallback, useEffect, useState } from "react";
import NextIcon from "src/shared/assets/icons/next.svg?react";
import PrevIcon from "src/shared/assets/icons/prev.svg?react";
import { EmblaCarouselType } from "embla-carousel";

import "./Carousel.css";
import { Button } from "../Button/Button";

interface CarouselProps {
  slides: ReactNode[];
}

const btnStyles = {
  borderRadius: "50%",
  padding: "8px",
  width: "48px",
  height: "48px",
  backgroundColor: "var(--white-text)",
};

export const Carousel = ({ slides }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__viewport">
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide">{slide}</div>
          ))}
        </div>
      </div>
      <Button
        className="carouselBtn embla__prev"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
        style={{
          left: 0,
          ...btnStyles,
        }}
      >
        <PrevIcon width={32} height={32}></PrevIcon>
      </Button>
      <Button
        disabled={nextBtnDisabled}
        className="carouselBtn embla__next"
        style={{
          right: 0,
          ...btnStyles,
        }}
        onClick={scrollNext}
      >
        <NextIcon width={32} height={32}></NextIcon>
      </Button>
    </div>
  );
};
