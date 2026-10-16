-- CreateEnum
CREATE TYPE "OpportunityType" AS ENUM ('job', 'internship', 'fellowship', 'volunteer');

-- CreateEnum
CREATE TYPE "LivedExperienceRelevance" AS ENUM ('required', 'preferred', 'welcomed', 'relevant');

-- CreateEnum
CREATE TYPE "OpportunityStatus" AS ENUM ('active', 'filled', 'archived');

-- CreateEnum
CREATE TYPE "LocationType" AS ENUM ('remote', 'hybrid', 'onsite');

-- CreateEnum
CREATE TYPE "ApplyMethodType" AS ENUM ('url', 'email');

-- CreateTable
CREATE TABLE "Opportunity" (
    "id" TEXT NOT NULL,
    "legacyId" TEXT,
    "title" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "OpportunityType" NOT NULL,
    "livedExperienceRelevance" "LivedExperienceRelevance" NOT NULL,
    "status" "OpportunityStatus" NOT NULL DEFAULT 'active',
    "source" TEXT NOT NULL DEFAULT 'owner-added',
    "locationType" "LocationType" NOT NULL,
    "city" TEXT,
    "state" TEXT,
    "address" TEXT,
    "isPaid" BOOLEAN NOT NULL,
    "compensation" TEXT NOT NULL,
    "datePosted" DATE NOT NULL,
    "deadline" DATE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastUpdated" DATE NOT NULL,
    "applyMethodType" "ApplyMethodType" NOT NULL,
    "applyMethodValue" TEXT NOT NULL,

    CONSTRAINT "Opportunity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Opportunity_legacyId_key" ON "Opportunity"("legacyId");
