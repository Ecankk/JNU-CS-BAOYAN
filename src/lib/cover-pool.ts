import type { ImageMetadata } from 'astro';
import cover001 from '../assets/cover-pool/cover-001.jpg';
import cover002 from '../assets/cover-pool/cover-002.jpg';
import cover003 from '../assets/cover-pool/cover-003.jpg';
import cover004 from '../assets/cover-pool/cover-004.jpg';
import cover005 from '../assets/cover-pool/cover-005.jpg';
import cover006 from '../assets/cover-pool/cover-006.jpg';
import cover007 from '../assets/cover-pool/cover-007.jpg';
import cover008 from '../assets/cover-pool/cover-008.jpg';
import cover009 from '../assets/cover-pool/cover-009.jpg';
import cover010 from '../assets/cover-pool/cover-010.jpg';
import cover011 from '../assets/cover-pool/cover-011.jpg';
import cover012 from '../assets/cover-pool/cover-012.jpg';
import cover013 from '../assets/cover-pool/cover-013.jpg';
import cover014 from '../assets/cover-pool/cover-014.jpg';
import cover015 from '../assets/cover-pool/cover-015.jpg';

const coverPool: ImageMetadata[] = [
  cover001, cover002, cover003, cover004, cover005,
  cover006, cover007, cover008, cover009, cover010,
  cover011, cover012, cover013, cover014, cover015,
];

/** Stable pseudo-random assignment: the same article always receives the same cover. */
export function pooledCover(key: string): ImageMetadata {
  let hash = 2166136261;
  for (const character of key) {
    hash ^= character.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return coverPool[(hash >>> 0) % coverPool.length];
}
