import * as i from 'types';
import * as React from 'react';

export const ProductsContext = React.createContext<ProductsContextProps>(
  {} as ProductsContextProps,
);

export const useProductsContext = () => {
  const context = React.useContext(ProductsContext);
  if (!context) throw new Error('ProductsContext cannot be rendered outside the Products component');
  return context;
};

export const ProductsProvider = ({
  children, initialItems,
}: ProductsProviderProps) => {
  const [days, setDays] = React.useState(1);
  const [items, setItems] = React.useState<i.Item[]>(initialItems);

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

      // "Conjured" items degrade in quality twice as fast
      if (isConjured) {
        qualityChange = qualityChange * 2;
      }

      // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
      if (isLegendarySulfuras) return updated;

      // The quality of an item is never negative
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
    <ProductsContext.Provider
      value={{
        currentDay: days,
        items,
        updateQuality,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

type ProductsContextProps = {
  currentDay: number;
  items: i.Item[];
  updateQuality: () => void;
};

type ProductsProviderProps = {
  children: React.ReactNode;
  initialItems: i.Item[];
};
