import * as i from 'types';
import * as React from 'react';

import { ProductsOverview } from 'modules/products';
import { Button } from 'common/interaction';
import { Container } from 'common/layout';
import { Heading } from 'common/typography';

const defaultItems: i.Item[] = [
  {
    name: '+5 Dexterity Vest',
    sellIn: 10,
    quality: 20,
  },
  {
    name: 'Aged Brie',
    sellIn: 2,
    quality: 0,
  },
  {
    name: 'Elixir of the Mongoose',
    sellIn: 5,
    quality: 7,
  },
  {
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 0,
    quality: 80,
  },
  {
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: -1,
    quality: 80,
  },
  {
    name: 'Backstage passes to a TAFKAL80ETC concer',
    sellIn: 15,
    quality: 20,
  },
  {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 10,
    quality: 49,
  },
  {
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 5,
    quality: 49,
  },
  {
    name: 'Conjured Mana Cake',
    sellIn: 3,
    quality: 6,
  },
];

const Products: React.FC = () => {
  const [days, setDays] = React.useState(1);
  const [items, setItems] = React.useState<i.Item[]>(defaultItems);

  const updateQuality = () => {
    const updatedItems = items.map((item) => {
      const isBackstage = item.name.includes('Backstage passes');
      const isBrie = item.name.includes('Aged Brie');
      const isLegendarySulfuras = item.name.includes('Sulfuras');
      const isConjured = item.name.includes('Conjured');
      const isQualityIncreaser = isBrie || isBackstage;

      const sellDatePassed = item.sellIn === 0;
      // Once the sell by date has passed, Quality degrades twice as fast
      let qualityChange = (sellDatePassed && !isQualityIncreaser) ? 2 : 1;

      const updated = { ...item };

      // Conjured items degrade in Quality twice as fast
      if (isConjured) {
        qualityChange = qualityChange * 2;
      }

      // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
      if (isLegendarySulfuras) return updated;

      // The Quality of an item is never negative
      if (item.quality - qualityChange < 0 && !isQualityIncreaser) {
        return {
          ...updated,
          quality: 0,
        };
      }

      // "Backstage passes" increases by 2 when days <= 10 days, by 3 when <= 5 days
      // Quality drops to 0 after the concert (not sure what's meant by after the concert??)
      if (isBackstage && item.sellIn <= 10) {
        qualityChange = 2;
        if (item.sellIn <= 5) qualityChange = 3;
      }

      if (isQualityIncreaser) {
        updated['quality'] = item.quality + qualityChange >= 50
          ? 50
          : item.quality + qualityChange;
      } else {
        updated['quality'] = item.quality - qualityChange;
      }

      if (!sellDatePassed) {
        updated['sellIn'] = item.sellIn - 1;
      }

      return updated;
    });

    setItems(updatedItems);
    setDays((prevDay) => prevDay + 1);
  };

  return (
    <Container>
      <Heading as="h2">Amount of days: {days}</Heading>
      <ProductsOverview {...{ items }} />
      <Button onClick={updateQuality}>
        Update quality
      </Button>
    </Container>
  );
};

export default Products;
