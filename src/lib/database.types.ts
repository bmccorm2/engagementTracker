export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Activity: {
        Row: {
          date: string | null
          engagementType: string
          id: number
          jhiAttendees: string | null
          subject: string
        }
        Insert: {
          date?: string | null
          engagementType: string
          id?: number
          jhiAttendees?: string | null
          subject: string
        }
        Update: {
          date?: string | null
          engagementType?: string
          id?: number
          jhiAttendees?: string | null
          subject?: string
        }
      }
      Engagement: {
        Row: {
          bbUniqueId: string | null
          created_at: string
          engagementTypeId: number | null
          id: number
        }
        Insert: {
          bbUniqueId?: string | null
          created_at?: string
          engagementTypeId?: number | null
          id?: number
        }
        Update: {
          bbUniqueId?: string | null
          created_at?: string
          engagementTypeId?: number | null
          id?: number
        }
      }
      Engagement_Activity: {
        Row: {
          activityId: number
          created_at: string
          engagementId: number
          id: number
        }
        Insert: {
          activityId: number
          created_at?: string
          engagementId: number
          id?: number
        }
        Update: {
          activityId?: number
          created_at?: string
          engagementId?: number
          id?: number
        }
      }
      Engagement_Objective: {
        Row: {
          created_at: string | null
          engagementId: number
          id: number
          objectiveId: number
        }
        Insert: {
          created_at?: string | null
          engagementId: number
          id?: number
          objectiveId: number
        }
        Update: {
          created_at?: string | null
          engagementId?: number
          id?: number
          objectiveId?: number
        }
      }
      Engagement_Type: {
        Row: {
          description: string
          id: number
        }
        Insert: {
          description: string
          id?: number
        }
        Update: {
          description?: string
          id?: number
        }
      }
      Objective: {
        Row: {
          description: string
          id: number
          isDone: boolean | null
        }
        Insert: {
          description: string
          id?: number
          isDone?: boolean | null
        }
        Update: {
          description?: string
          id?: number
          isDone?: boolean | null
        }
      }
      Security: {
        Row: {
          bbUniqueId: string
          companyName: string | null
          countryOfRisk: string | null
          gicsSector: string | null
          ticker: string | null
        }
        Insert: {
          bbUniqueId: string
          companyName?: string | null
          countryOfRisk?: string | null
          gicsSector?: string | null
          ticker?: string | null
        }
        Update: {
          bbUniqueId?: string
          companyName?: string | null
          countryOfRisk?: string | null
          gicsSector?: string | null
          ticker?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

