import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { storage } from '@/lib/storage';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GalleryItem } from '@/types';

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const items = await storage.getGallery();
        setGallery(items);
      } catch (err) {
        console.error('Error fetching gallery:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchGallery();
  }, []);

  const categories = ['All', 'Events', 'Labs', 'Cultural', 'Graduation', 'Celebrations'];

  const filteredGallery = category === 'All'
    ? gallery
    : gallery.filter(item => item.category === category);

  return (
    <div className="pb-24">
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">School Gallery</h1>
          <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Capturing the vibrant life, activities, and celebrations at BBM High School.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-16">
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <Tabs defaultValue="All" onValueChange={setCategory} className="w-fit">
            <TabsList className="bg-secondary/50 p-1 rounded-full border border-border whitespace-nowrap">
              {categories.map(cat => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  className="rounded-full px-6 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {loading ? (
          <div className="text-center py-24 text-muted-foreground">
            Loading gallery items...
          </div>
        ) : (
          <>
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence mode="popLayout">
                {filteredGallery.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-lg border border-border"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                      <span className="text-white/60 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                      <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredGallery.length === 0 && (
              <div className="text-center py-24 text-muted-foreground">
                No images found in this category.
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
