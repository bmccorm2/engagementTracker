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
          companyAttendees: string | null
          date: string
          engagementType: string
          id: number
          jhiAttendees: string | null
          subject: string | null
        }
        Insert: {
          companyAttendees?: string | null
          date: string
          engagementType: string
          id?: number
          jhiAttendees?: string | null
          subject?: string | null
        }
        Update: {
          companyAttendees?: string | null
          date?: string
          engagementType?: string
          id?: number
          jhiAttendees?: string | null
          subject?: string | null
        }
      }
      Engagement: {
        Row: {
          bbUniqueId: string
          created_at: string
          engagementTypeId: number
          id: number
          isDone: boolean
          isDoneDate: string | null
        }
        Insert: {
          bbUniqueId: string
          created_at?: string
          engagementTypeId: number
          id?: number
          isDone?: boolean
          isDoneDate?: string | null
        }
        Update: {
          bbUniqueId?: string
          created_at?: string
          engagementTypeId?: number
          id?: number
          isDone?: boolean
          isDoneDate?: string | null
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
          isDone: boolean
          isDoneDate: string | null
        }
        Insert: {
          description: string
          id?: number
          isDone?: boolean
          isDoneDate?: string | null
        }
        Update: {
          description?: string
          id?: number
          isDone?: boolean
          isDoneDate?: string | null
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

