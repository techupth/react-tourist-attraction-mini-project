import DestinationCard from "./DestinationCard";

function DestinationList({ destinations, isLoading, onTagClick }) {
  if (isLoading) {
    return (
      <p className="py-12 text-center text-base text-gray-500">กำลังค้นหา...</p>
    );
  }

  if (!destinations?.length) {
    return (
      <p className="py-12 text-center text-base text-gray-500">
        ไม่พบที่เที่ยวที่ค้นหา
      </p>
    );
  }

  return (
    <section className="flex flex-col gap-14">
      {destinations.map((destination) => (
        <DestinationCard
          key={destination.eid}
          title={destination.title}
          description={destination.description}
          photos={destination.photos}
          tags={destination.tags}
          url={destination.url}
          onTagClick={onTagClick}
        />
      ))}
    </section>
  );
}

export default DestinationList;
