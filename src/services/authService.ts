/**
 * SOILREVIVE User Authentication & Session Service
 * Manages user logins, signups, mock demo accounts, and local session persistence.
 */

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'farmer' | 'agronomist' | 'enterprise';
  roleTitle: string;
  state: string;
  farmName: string;
  farmSize: string;
  primaryCrop: string;
  passportId: string;
  avatar?: string;
  token?: string;
  createdAt?: string;
}

export const DEMO_USERS: UserProfile[] = [
  {
    id: 'usr_musa_01',
    name: 'Musa Ibrahim',
    email: 'musa.ibrahim@kadunafarms.ng',
    phone: '+234 803 123 4567',
    role: 'farmer',
    roleTitle: 'Smallholder Farmer',
    state: 'Kaduna State',
    farmName: 'Kaduna Grain & Maize Cluster #4',
    farmSize: '12.4 Hectares',
    primaryCrop: 'Hybrid White Maize (SAMMAZ-15)',
    passportId: 'NG-SOIL-2026-KANO-104',
  },
  {
    id: 'usr_ngozi_02',
    name: 'Dr. Ngozi Okafor',
    email: 'ngozi.okafor@soilrevive.org',
    phone: '+234 802 987 6543',
    role: 'agronomist',
    roleTitle: 'Chief Agronomist & Cooperative Lead',
    state: 'Oyo State',
    farmName: 'Oyo Bio-Fortified Cassava Estate',
    farmSize: '18.0 Hectares',
    primaryCrop: 'Pro-Vitamin A Cassava (TME-419)',
    passportId: 'NG-SOIL-2026-OGUN-302',
  },
  {
    id: 'usr_tunde_03',
    name: 'Aliko Balogun',
    email: 'aliko@afri-agrifleet.com',
    phone: '+234 814 555 8901',
    role: 'enterprise',
    roleTitle: 'Commercial Agro-Fleet Director',
    state: 'Benue State',
    farmName: 'Benue River Basin Yam & Soy Hub',
    farmSize: '45.0 Hectares',
    primaryCrop: 'Export Grade White Yam & Soybean',
    passportId: 'NG-SOIL-2026-BENUE-512',
  },
];

const STORAGE_KEY = 'soilrevive_active_user';

export const authService = {
  /**
   * Get currently authenticated user from localStorage
   */
  getCurrentUser(): UserProfile | null {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return null;
      return JSON.parse(data) as UserProfile;
    } catch {
      return null;
    }
  },

  /**
   * Log in using email or phone + password
   */
  async login(identifier: string, _password?: string): Promise<UserProfile> {
    // Artificial latency for realism
    await new Promise((r) => setTimeout(r, 600));

    const cleanId = identifier.trim().toLowerCase();

    // Match against demo users or find in local storage
    const matched = DEMO_USERS.find(
      (u) =>
        u.email.toLowerCase() === cleanId ||
        u.phone.replace(/\s+/g, '') === cleanId.replace(/\s+/g, '') ||
        u.name.toLowerCase().includes(cleanId)
    );

    if (matched) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(matched));
      return matched;
    }

    // Check if custom registered user exists in storage registry
    try {
      const registryRaw = localStorage.getItem('soilrevive_registered_users');
      if (registryRaw) {
        const registry: UserProfile[] = JSON.parse(registryRaw);
        const registeredMatch = registry.find(
          (u) =>
            u.email.toLowerCase() === cleanId ||
            u.phone.replace(/\s+/g, '') === cleanId.replace(/\s+/g, '')
        );
        if (registeredMatch) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(registeredMatch));
          return registeredMatch;
        }
      }
    } catch (e) {
      console.warn('Could not read user registry', e);
    }

    // Default fallback: Generate user profile from given identifier
    const defaultUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: identifier.includes('@') ? identifier.split('@')[0] : identifier,
      email: identifier.includes('@') ? identifier : `${identifier.replace(/\D/g, '') || 'farmer'}@soilrevive.ng`,
      phone: identifier.includes('@') ? '+234 800 000 0000' : identifier,
      role: 'farmer',
      roleTitle: 'Registered Farmer',
      state: 'Kaduna State',
      farmName: 'My Agro Farmstead',
      farmSize: '5.0 Hectares',
      primaryCrop: 'Cassava & Maize',
      passportId: `NG-SOIL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUser));
    return defaultUser;
  },

  /**
   * Sign up a new user account
   */
  async signup(data: {
    name: string;
    email: string;
    phone: string;
    state: string;
    role: 'farmer' | 'agronomist' | 'enterprise';
    farmName?: string;
    farmSize?: string;
    primaryCrop?: string;
    password?: string;
  }): Promise<UserProfile> {
    await new Promise((r) => setTimeout(r, 700));

    const roleTitles: Record<'farmer' | 'agronomist' | 'enterprise', string> = {
      farmer: 'Smallholder Farmer',
      agronomist: 'Agricultural Specialist',
      enterprise: 'Commercial Agribusiness Lead',
    };

    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: data.name,
      email: data.email || `${data.phone.replace(/\D/g, '') || 'farmer'}@soilrevive.ng`,
      phone: data.phone,
      role: data.role,
      roleTitle: roleTitles[data.role] || 'Registered Member',
      state: data.state || 'Kaduna State',
      farmName: data.farmName || `${data.name}'s Agro Plot`,
      farmSize: data.farmSize || '4.0 Hectares',
      primaryCrop: data.primaryCrop || 'Maize & Cassava',
      passportId: `NG-SOIL-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      createdAt: new Date().toISOString(),
    };

    // Save to user registry
    try {
      const registryRaw = localStorage.getItem('soilrevive_registered_users');
      const registry: UserProfile[] = registryRaw ? JSON.parse(registryRaw) : [];
      registry.push(newUser);
      localStorage.setItem('soilrevive_registered_users', JSON.stringify(registry));
    } catch (e) {
      console.warn('Could not save to registry', e);
    }

    // Set as active logged in user
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return newUser;
  },

  /**
   * Log out active user
   */
  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
  },
};
